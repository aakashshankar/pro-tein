'use client'

import { useEffect, useState } from 'react'
import { Typography, List, Card, Spin } from 'antd'
import { HeartOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function SavedRecipesPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()
  const [savedRecipes, setSavedRecipes] = useState<Model.SavedRecipe[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    if (userId) {
      Api.User.findOne(userId, {
        includes: ['savedRecipes', 'savedRecipes.recipe'],
      })
        .then(user => {
          setSavedRecipes(user.savedRecipes || [])
          setLoading(false)
        })
        .catch(error => {
          enqueueSnackbar('Failed to load saved recipes', { variant: 'error' })
          setLoading(false)
        })
    }
  }, [userId])

  const handleRecipeClick = (recipeId: string) => {
    router.push(`/recipes/${recipeId}`)
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>My Saved Recipes</Title>
      <Text>Here you can find all your saved recipes.</Text>
      {loading ? (
        <Spin size="large" />
      ) : (
        <List
          grid={{ gutter: 16, column: 1 }}
          dataSource={savedRecipes}
          renderItem={savedRecipe => (
            <List.Item>
              <Card
                hoverable
                onClick={() => handleRecipeClick(savedRecipe.recipe?.id || '')}
                title={savedRecipe.recipe?.title}
                extra={<HeartOutlined />}
              >
                <Text>{savedRecipe.recipe?.description}</Text>
                <br />
                <Text type="secondary">
                  Saved on{' '}
                  {dayjs(savedRecipe.dateCreated).format('MMMM D, YYYY')}
                </Text>
              </Card>
            </List.Item>
          )}
        />
      )}
    </PageLayout>
  )
}

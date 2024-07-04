'use client'

import { useEffect, useState } from 'react'
import { Typography, Button, Row, Col, Card, Spin } from 'antd'
import {
  FacebookOutlined,
  TwitterOutlined,
  LinkedinOutlined,
} from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function SocialSharingPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()
  const [recipes, setRecipes] = useState<Model.Recipe[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    if (userId) {
      Api.User.findOne(userId, { includes: ['recipes'] })
        .then(user => {
          setRecipes(user.recipes || [])
          setLoading(false)
        })
        .catch(error => {
          enqueueSnackbar('Failed to load recipes', { variant: 'error' })
          setLoading(false)
        })
    }
  }, [userId])

  const shareOnSocialMedia = (platform: string, recipe: Model.Recipe) => {
    const url = `${window.location.origin}/recipes/${recipe.id}`
    const text = `Check out this recipe: ${recipe.title}`
    let shareUrl = ''

    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
        break
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`
        break
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
        break
      default:
        return
    }

    window.open(shareUrl, '_blank')
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Share Your Recipes</Title>
      <Text>
        Share your favorite recipes with your friends and followers on social
        media.
      </Text>
      {loading ? (
        <Spin size="large" />
      ) : (
        <Row gutter={[16, 16]} style={{ marginTop: '20px' }}>
          {recipes.map(recipe => (
            <Col xs={24} sm={12} md={8} lg={6} key={recipe.id}>
              <Card title={recipe.title} bordered={false}>
                <Text>{recipe.description}</Text>
                <div style={{ marginTop: '10px' }}>
                  <Button
                    icon={<FacebookOutlined />}
                    onClick={() => shareOnSocialMedia('facebook', recipe)}
                    style={{ marginRight: '5px' }}
                  />
                  <Button
                    icon={<TwitterOutlined />}
                    onClick={() => shareOnSocialMedia('twitter', recipe)}
                    style={{ marginRight: '5px' }}
                  />
                  <Button
                    icon={<LinkedinOutlined />}
                    onClick={() => shareOnSocialMedia('linkedin', recipe)}
                  />
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </PageLayout>
  )
}

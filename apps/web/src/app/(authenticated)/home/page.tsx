'use client'

import { useState, useEffect } from 'react'
import {
  Typography,
  Input,
  Button,
  Form,
  Select,
  Card,
  Row,
  Col,
  Spin,
} from 'antd'
import { SearchOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
const { Option } = Select
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function HomePage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()

  const [recipes, setRecipes] = useState<Model.Recipe[]>([])
  const [loading, setLoading] = useState(false)

  const fetchRecipes = async (filters: any) => {
    setLoading(true)
    try {
      const recipesFound = await Api.Recipe.findMany({
        filters,
        includes: ['user', 'recipeDietaryRestrictions', 'recipeIngredients'],
      })
      setRecipes(recipesFound)
    } catch (error) {
      enqueueSnackbar('Failed to fetch recipes', { variant: 'error' })
    } finally {
      setLoading(false)
    }
  }

  const onFinish = (values: any) => {
    const filters: any = {}
    if (values.title) {
      filters.title = { ilike: `%${values.title}%` }
    }
    if (values.dietaryRestrictions) {
      filters['recipeDietaryRestrictions.dietaryRestrictionId'] = {
        in: values.dietaryRestrictions,
      }
    }
    if (values.maxCookingTime) {
      filters.cookingTime = { lte: values.maxCookingTime }
    }
    fetchRecipes(filters)
  }

  useEffect(() => {
    fetchRecipes({})
  }, [])

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Search High Protein Recipes</Title>
      <Text>
        Find meals that meet your dietary needs by applying various constraints.
      </Text>
      <Form layout="vertical" onFinish={onFinish} style={{ marginTop: 20 }}>
        <Form.Item name="title" label="Recipe Title">
          <Input placeholder="Enter recipe title" prefix={<SearchOutlined />} />
        </Form.Item>
        <Form.Item name="dietaryRestrictions" label="Dietary Restrictions">
          <Select mode="multiple" placeholder="Select dietary restrictions">
            {/* Assuming dietary restrictions are predefined */}
            <Option value="1">Vegan</Option>
            <Option value="2">Gluten-Free</Option>
            <Option value="3">Keto</Option>
          </Select>
        </Form.Item>
        <Form.Item name="maxCookingTime" label="Max Cooking Time (minutes)">
          <Input type="number" placeholder="Enter max cooking time" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Search
          </Button>
        </Form.Item>
      </Form>
      {loading ? (
        <Spin size="large" />
      ) : (
        <Row gutter={[16, 16]}>
          {recipes?.map(recipe => (
            <Col xs={24} sm={12} md={8} lg={6} key={recipe.id}>
              <Card
                title={recipe.title}
                extra={
                  <Button
                    type="link"
                    onClick={() => router.push(`/recipes/${recipe.id}`)}
                  >
                    View
                  </Button>
                }
              >
                <Text>{recipe.description}</Text>
                <br />
                <Text strong>Cooking Time:</Text> {recipe.cookingTime} mins
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </PageLayout>
  )
}

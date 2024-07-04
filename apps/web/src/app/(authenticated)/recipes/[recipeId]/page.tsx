'use client'

import { useEffect, useState } from 'react'
import { Typography, Rate, Button, Form, Input, List, Row, Col } from 'antd'
import { PrinterOutlined } from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function RecipeDetailsPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()

  const [recipe, setRecipe] = useState<Model.Recipe | null>(null)
  const [reviews, setReviews] = useState<Model.Review[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const recipeData = await Api.Recipe.findOne(params.recipeId, {
          includes: ['user', 'recipeIngredients', 'reviews.user'],
        })
        setRecipe(recipeData)
        setReviews(recipeData.reviews || [])
        setLoading(false)
      } catch (error) {
        enqueueSnackbar('Failed to load recipe details', { variant: 'error' })
        setLoading(false)
      }
    }

    fetchRecipe()
  }, [params.recipeId])

  const handleReviewSubmit = async (values: {
    rating: number
    comment: string
  }) => {
    if (!userId) {
      enqueueSnackbar('You must be logged in to submit a review', {
        variant: 'error',
      })
      return
    }

    try {
      const newReview = await Api.Review.createOneByUserId(userId, {
        rating: values.rating,
        comment: values.comment,
        recipeId: params.recipeId,
      })
      setReviews([...reviews, newReview])
      enqueueSnackbar('Review submitted successfully', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar('Failed to submit review', { variant: 'error' })
    }
  }

  const handlePrint = () => {
    window.print()
  }

  if (loading) {
    return <PageLayout layout="narrow">Loading...</PageLayout>
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>{recipe?.title}</Title>
      <Paragraph>{recipe?.description}</Paragraph>
      <Row gutter={[16, 16]}>
        <Col span={24} md={12}>
          <Title level={4}>Ingredients</Title>
          <List
            dataSource={recipe?.recipeIngredients}
            renderItem={item => (
              <List.Item>
                <Text>
                  {item.quantity} {item.unit} {item.ingredient?.name}
                </Text>
              </List.Item>
            )}
          />
        </Col>
        <Col span={24} md={12}>
          <Title level={4}>Instructions</Title>
          <Paragraph>{recipe?.instructions}</Paragraph>
        </Col>
      </Row>
      <Title level={4}>Nutritional Information</Title>
      <Paragraph>{recipe?.nutritionalInfo}</Paragraph>
      <Button type="primary" icon={<PrinterOutlined />} onClick={handlePrint}>
        Print Recipe
      </Button>
      <Title level={4}>Reviews</Title>
      <List
        dataSource={reviews}
        renderItem={review => (
          <List.Item>
            <List.Item.Meta
              title={<Rate disabled defaultValue={review.rating} />}
              description={review.comment}
            />
            <Text>
              {review.user?.name} -{' '}
              {dayjs(review.dateCreated).format('MMMM D, YYYY')}
            </Text>
          </List.Item>
        )}
      />
      <Title level={4}>Submit a Review</Title>
      <Form onFinish={handleReviewSubmit}>
        <Form.Item
          name="rating"
          label="Rating"
          rules={[{ required: true, message: 'Please select a rating' }]}
        >
          <Rate />
        </Form.Item>
        <Form.Item
          name="comment"
          label="Comment"
          rules={[{ required: true, message: 'Please enter a comment' }]}
        >
          <Input.TextArea rows={4} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit Review
          </Button>
        </Form.Item>
      </Form>
    </PageLayout>
  )
}

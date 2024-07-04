'use client'

import { useEffect, useState } from 'react'
import { Typography, Form, Input, Button, List, Card, Space, Modal } from 'antd'
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function MyRecipesPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()

  const [recipes, setRecipes] = useState<Model.Recipe[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false)
  const [editingRecipe, setEditingRecipe] = useState<Model.Recipe | null>(null)

  useEffect(() => {
    if (userId) {
      Api.Recipe.findManyByUserId(userId, { includes: ['user'] })
        .then(setRecipes)
        .catch(() =>
          enqueueSnackbar('Failed to load recipes', { variant: 'error' }),
        )
        .finally(() => setLoading(false))
    }
  }, [userId])

  const handleDelete = async (recipeId: string) => {
    try {
      await Api.Recipe.deleteOne(recipeId)
      setRecipes(recipes.filter(recipe => recipe.id !== recipeId))
      enqueueSnackbar('Recipe deleted successfully', { variant: 'success' })
    } catch {
      enqueueSnackbar('Failed to delete recipe', { variant: 'error' })
    }
  }

  const handleEdit = (recipe: Model.Recipe) => {
    setEditingRecipe(recipe)
    setIsModalVisible(true)
  }

  const handleModalCancel = () => {
    setIsModalVisible(false)
    setEditingRecipe(null)
  }

  const handleFormSubmit = async (values: Partial<Model.Recipe>) => {
    try {
      if (editingRecipe) {
        const updatedRecipe = await Api.Recipe.updateOne(
          editingRecipe.id,
          values,
        )
        setRecipes(
          recipes.map(recipe =>
            recipe.id === updatedRecipe.id ? updatedRecipe : recipe,
          ),
        )
        enqueueSnackbar('Recipe updated successfully', { variant: 'success' })
      } else {
        const newRecipe = await Api.Recipe.createOneByUserId(userId!, values)
        setRecipes([...recipes, newRecipe])
        enqueueSnackbar('Recipe created successfully', { variant: 'success' })
      }
      setIsModalVisible(false)
      setEditingRecipe(null)
    } catch {
      enqueueSnackbar('Failed to save recipe', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>My High Protein Recipes</Title>
      <Paragraph>
        Manage your high protein recipes. You can add, edit, or delete your
        recipes here.
      </Paragraph>
      <Button
        type="primary"
        icon={<PlusOutlined />}
        onClick={() => setIsModalVisible(true)}
      >
        Add Recipe
      </Button>
      <List
        grid={{ gutter: 16, column: 1 }}
        dataSource={recipes}
        loading={loading}
        renderItem={recipe => (
          <List.Item>
            <Card
              title={recipe.title}
              actions={[
                <EditOutlined key="edit" onClick={() => handleEdit(recipe)} />,
                <DeleteOutlined
                  key="delete"
                  onClick={() => handleDelete(recipe.id)}
                />,
              ]}
            >
              <Paragraph>{recipe.description}</Paragraph>
            </Card>
          </List.Item>
        )}
      />
      <Modal
        title={editingRecipe ? 'Edit Recipe' : 'Add Recipe'}
        visible={isModalVisible}
        onCancel={handleModalCancel}
        footer={null}
      >
        <Form
          initialValues={
            editingRecipe || {
              title: '',
              description: '',
              instructions: '',
              cookingTime: 0,
              nutritionalInfo: '',
            }
          }
          onFinish={handleFormSubmit}
        >
          <Form.Item
            name="title"
            label="Title"
            rules={[{ required: true, message: 'Please input the title!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="description" label="Description">
            <Input.TextArea />
          </Form.Item>
          <Form.Item name="instructions" label="Instructions">
            <Input.TextArea />
          </Form.Item>
          <Form.Item name="cookingTime" label="Cooking Time">
            <Input type="number" />
          </Form.Item>
          <Form.Item name="nutritionalInfo" label="Nutritional Info">
            <Input.TextArea />
          </Form.Item>
          <Form.Item>
            <Space>
              <Button type="primary" htmlType="submit">
                {editingRecipe ? 'Update' : 'Create'}
              </Button>
              <Button onClick={handleModalCancel}>Cancel</Button>
            </Space>
          </Form.Item>
        </Form>
      </Modal>
    </PageLayout>
  )
}

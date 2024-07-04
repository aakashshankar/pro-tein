'use client'

import { useEffect, useState } from 'react'
import { Typography, Button, Avatar, List, Row, Col, Space } from 'antd'
import { UserOutlined, StarOutlined, PlusOutlined } from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function UserProfilePage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()

  const [userProfile, setUserProfile] = useState<Model.User | null>(null)
  const [isFollowing, setIsFollowing] = useState<boolean>(false)

  useEffect(() => {
    if (params.userId) {
      Api.User.findOne(params.userId, {
        includes: ['recipes', 'reviews', 'followsAsFollower'],
      })
        .then(user => setUserProfile(user))
        .catch(error =>
          enqueueSnackbar('Failed to fetch user profile', { variant: 'error' }),
        )
    }
  }, [params.userId])

  useEffect(() => {
    if (userId && params.userId) {
      Api.Follow.findManyByFolloweeId(params.userId, { includes: ['follower'] })
        .then(follows => {
          const isFollowing = follows.some(
            follow => follow.followerId === userId,
          )
          setIsFollowing(isFollowing)
        })
        .catch(error =>
          enqueueSnackbar('Failed to fetch follow status', {
            variant: 'error',
          }),
        )
    }
  }, [userId, params.userId])

  const handleFollow = () => {
    if (userId && params.userId) {
      Api.Follow.createOneByFollowerId(userId, { followeeId: params.userId })
        .then(() => {
          setIsFollowing(true)
          enqueueSnackbar('You are now following this user', {
            variant: 'success',
          })
        })
        .catch(error =>
          enqueueSnackbar('Failed to follow user', { variant: 'error' }),
        )
    }
  }

  return (
    <PageLayout layout="narrow">
      <Row justify="center">
        <Col span={24}>
          <Title level={2}>User Profile</Title>
          <Paragraph>
            View the profile of other users who upload recipes and follow them
            to stay updated on their new recipe uploads.
          </Paragraph>
        </Col>
      </Row>
      {userProfile && (
        <Row justify="center">
          <Col span={24} style={{ textAlign: 'center' }}>
            <Avatar
              size={64}
              src={userProfile.pictureUrl}
              icon={<UserOutlined />}
            />
            <Title level={3}>{userProfile.name}</Title>
            <Text>{userProfile.email}</Text>
            <br />
            <Button
              type="primary"
              icon={<PlusOutlined />}
              onClick={handleFollow}
              disabled={isFollowing}
            >
              {isFollowing ? 'Following' : 'Follow'}
            </Button>
          </Col>
          <Col span={24} style={{ marginTop: '20px' }}>
            <Title level={4}>Recipes</Title>
            <List
              itemLayout="horizontal"
              dataSource={userProfile.recipes}
              renderItem={recipe => (
                <List.Item
                  actions={[
                    <Button
                      type="link"
                      onClick={() => router.push(`/recipes/${recipe.id}`)}
                    >
                      View
                    </Button>,
                  ]}
                >
                  <List.Item.Meta
                    avatar={
                      <Avatar
                        src={recipe.user?.pictureUrl}
                        icon={<UserOutlined />}
                      />
                    }
                    title={recipe.title}
                    description={recipe.description}
                  />
                </List.Item>
              )}
            />
          </Col>
          <Col span={24} style={{ marginTop: '20px' }}>
            <Title level={4}>Reviews</Title>
            <List
              itemLayout="horizontal"
              dataSource={userProfile.reviews}
              renderItem={review => (
                <List.Item>
                  <List.Item.Meta
                    avatar={
                      <Avatar
                        src={review.user?.pictureUrl}
                        icon={<UserOutlined />}
                      />
                    }
                    title={
                      <Space>
                        <StarOutlined />
                        {review.rating}
                      </Space>
                    }
                    description={review.comment}
                  />
                </List.Item>
              )}
            />
          </Col>
        </Row>
      )}
    </PageLayout>
  )
}

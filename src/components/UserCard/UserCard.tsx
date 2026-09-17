import React from 'react'
import { Card, Flex } from 'antd'
import styles from './UserCard.module.css'
import { LinkOutlined, UserOutlined } from '@ant-design/icons';
import Link from 'antd/es/typography/Link';
import { UserRepoList } from '../UserRepoList/UserRepoList';
import type { GitHubUserRepos } from '../../types';
import { UserCardSkeleton } from './Skeleton/Skeleton';

interface UserItemProps {
    name: string
    login: string
    avatar_url?: string
    url?: string
    html_url?: string
    followers?: number
    public_repos?: number
}

interface UserCardProps {
    user: UserItemProps
    repos?: GitHubUserRepos[] | []
}

export const UserCard: React.FC<UserCardProps> = ({
    user,
    repos
}) => {

    if (user.login === '' || user.login === null || user.login === undefined) {
        return <UserCardSkeleton />
    }
    return (
        <Card>
            <Flex className={styles.userCard}>
                <div className={styles.userInfoWrapper}>
                    <div className={styles.imageWrapper}>
                        <img
                            width={200}
                            alt="basic"
                            src={user.avatar_url}
                        />
                    </div>
                    <h2>{user.name}</h2>
                    <p><UserOutlined /> {user.login}</p>
                    <Link target="_blank" href={user.html_url}><LinkOutlined /> {user.html_url}</Link>
                </div>
                <div className={styles.reposWrapper}>
                    <UserRepoList repos={repos || []} />
                </div>
            </Flex>

        </Card>
    )
}
import { Card, Flex, Tag } from 'antd';
import type { GitHubUserRepos } from '../../types';
import styles from './UserRepoDetails.module.css';
import { UserOutlined, LinkOutlined, CodeOutlined, StarOutlined, ForkOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import Link from 'antd/es/typography/Link';
import { UserRepoDetailsSkeleton } from './Skeleton/Skeleton';

interface UserRepoDetailsProps {
    repo?: GitHubUserRepos
}

export const UserRepoDetails: React.FC<UserRepoDetailsProps> = ({ repo }) => {
    if (!repo) {
        return <UserRepoDetailsSkeleton />
    }
    return (
        <Card>
            <div className={styles.backButton}>
                <Link href={`/user/${repo.owner.login}`}><ArrowLeftOutlined /> Voltar</Link>
            </div>
            <Flex className={styles.repoCard}>
                <div className={styles.userRepoDetailsInfoWrapper}>
                    <div className={styles.imageWrapper}>
                        <img src={repo.owner.avatar_url} alt={repo.name} />
                    </div>
                    <h2>{repo.owner.login}</h2>
                    <p><UserOutlined /> {repo.owner.login}</p>
                    <Link target="_blank" href={repo.html_url}><LinkOutlined /> {repo.name}</Link>
                </div>
                <div className={styles.repoDetailsInfoWrapper}>
                    <h1>{repo.name}</h1>
                    <p>{repo.description}</p>
                    <Tag icon={<CodeOutlined />} color="blue">{repo.language}</Tag>
                    <Tag icon={<StarOutlined />} color="yellow">{repo.stargazers_count}</Tag>
                    <Tag icon={<ForkOutlined />} color="orange"> {repo.forks_count}</Tag>
                </div>
            </Flex>
        </Card>
    )
}
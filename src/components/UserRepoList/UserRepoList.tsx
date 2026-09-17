import Link from 'antd/es/typography/Link';
import styles from './UserRepoList.module.css';
import { FolderOutlined, CodeOutlined, StarOutlined, ForkOutlined, ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import { Button, Tag } from 'antd';
import type { GitHubUserRepos } from '../../types';
import { useMemo, useState } from 'react';

export interface UserRepoListProps {
    repos: GitHubUserRepos[] | null
}

export const UserRepoList: React.FC<UserRepoListProps> = ({ repos }) => {
    const [order, setOrder] = useState<'asc' | 'desc'>('asc');
    const sortedRepos = useMemo(() => {
        const list = [...(repos || [])];
        return list.sort((a, b) =>
            order === 'asc'
                ? a.stargazers_count - b.stargazers_count
                : b.stargazers_count - a.stargazers_count
        );
    }, [repos, order]);
    const handleOrder = () => {
        setOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'));
    }

    return (
        <>
            <div className={styles.userRepoListHeader}>
                <h3>Repositórios</h3>
                <Button type="primary" icon={order === 'asc' ? <ArrowUpOutlined /> : <ArrowDownOutlined />} onClick={handleOrder}><StarOutlined /></Button>
            </div>
            <div className={styles.userRepoList}>
                {sortedRepos?.map((repo: GitHubUserRepos) => (
                    <div key={repo.name} className={styles.repoItem}>
                        <Link href={`/repo/${repo.owner.login}/${repo.name}`}><FolderOutlined /> {repo.name}</Link>
                        <p>{repo.description}</p>
                        <div className={styles.repoInfo}>
                            <Tag icon={<CodeOutlined />} color="blue">{repo.language}</Tag>
                            <Tag icon={<StarOutlined />} color="yellow">{repo.stargazers_count}</Tag>
                            <Tag icon={<ForkOutlined />} color="orange"> {repo.forks_count}</Tag>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
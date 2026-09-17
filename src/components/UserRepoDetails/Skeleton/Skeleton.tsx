import { Card, Flex, Skeleton } from "antd"
import styles from '../UserRepoDetails.module.css'

export const UserRepoDetailsSkeleton = () => {
    return (
        <Card>
            <Flex className={styles.repoCard}>
                <div className={styles.userRepoDetailsInfoWrapper}>
                    <div className={styles.imageWrapper}>
                        <Skeleton.Avatar active={true} shape='circle' size={100} />
                    </div>
                    <Skeleton paragraph={{ rows: 2 }} active={true} />
                </div>
                <div className={styles.repoDetailsInfoWrapper}>
                    <Skeleton paragraph={{ rows: 3 }} active={true} />
                </div>
            </Flex>
        </Card>
    )
}
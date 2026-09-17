import { Card, Flex, Skeleton } from "antd"
import styles from '../UserCard.module.css'

export const UserCardSkeleton = () => {
    return (
        <Card>
            <Flex className={styles.userCard}>
                <div className={styles.userInfoWrapper}>
                    <div className={styles.imageWrapper}>
                        <Skeleton.Avatar active={true} shape='circle' size={100} />
                    </div>
                    <Skeleton paragraph={{ rows: 2 }} active={true} />
                </div>
                <div className={styles.reposWrapper}>
                    <Skeleton paragraph={{ rows: 3 }} active={true} />
                </div>
            </Flex>
        </Card>
    )
}
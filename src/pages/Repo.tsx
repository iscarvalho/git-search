import { useEffect, useState } from "react";
import { UserRepoDetails } from "../components/UserRepoDetails/UserRepoDetails";
import { useParams } from "react-router-dom";
import { useApi } from "../hooks/useApi";
import type { GitHubUserRepos } from "../types";
import { UserRepoDetailsSkeleton } from "../components/UserRepoDetails/Skeleton/Skeleton";


export default function Repo() {
    const repo = useParams<{ username: string, repoName: string }>();
    const apiCall = useApi()
    const [repoData, setRepoData] = useState<GitHubUserRepos | null>()

    useEffect(() => {
        if (!repo.username || !repo.repoName) return;

        let cancelled = false;

        apiCall({
            method: 'GET',
            url: `/repos/${repo.username}/${repo.repoName}`,
        })
        .then((response) => {
            if (!cancelled) setRepoData(response.data);
        })
        .catch((error: unknown) => {
            console.log('ERROR: ', error);
        });

        return () => {
            cancelled = true;
        };
    }, [apiCall, repo.username, repo.repoName]);

    if (!repoData) {
        return <UserRepoDetailsSkeleton />
    }

    return (
        <UserRepoDetails repo={repoData} />
    )
}
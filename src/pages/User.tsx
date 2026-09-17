import { useParams } from "react-router-dom";
import { UserCard } from "../components/UserCard/UserCard";
import { useApi } from "../hooks/useApi";
import { useEffect, useState } from "react";
import type { GitHubUserData, GitHubUserRepos } from "../types";

export default function User() {
  const user = useParams<{ username: string }>();
  const apiCall = useApi()
  const [userData, setUserData] = useState<GitHubUserData | null>()
  const [repos, setRepos] = useState<GitHubUserRepos[] | []>([])

  useEffect(() => {
    if (!user.username) return;
    let cancelled = false;
    apiCall({
      method: 'GET',
      url: `/users/${user.username}`,
    })
      .then((response) => {
        if (!cancelled) setUserData(response.data);
      })
      .catch((error: unknown) => {
        console.log('ERROR: ', error);
      });
    apiCall({
      method: 'GET',
      url: `/users/${user.username}/repos`,
    })
      .then((response) => {
        if (!cancelled) setRepos(response.data ?? []);
      })
      .catch((error: unknown) => {
        console.log('ERROR: ', error);
      });
    return () => {
      cancelled = true;
    };
  }, [apiCall, user.username]);

  return (
    <>
      <UserCard user={userData || { name: '', login: '' }} repos={repos} />
    </>
  )
}
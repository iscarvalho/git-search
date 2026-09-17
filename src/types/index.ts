import type { AxiosRequestConfig, Method } from "axios"

export type ApiCallParams = {
    method: Method
    url: string
    config?: AxiosRequestConfig
}

export type GitHubUserData = {
    name: string
    login: string
    avatar_url: string
    url: string
    html_url: string
    followers: number
    public_repos: number
}

export type GitHubUserRepos = {
    owner: {
        avatar_url: string
        login: string
    }
    name: string
    full_name: string
    html_url: string
    description: string
    stargazers_count: number
    forks_count: number
    language: string
}
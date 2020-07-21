import { StringifyOptions } from 'querystring';

export interface User{
    id: number;
    avatar_url: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    repos_url: string;
    name: string;
    company: string;
    blog: string;
    location: string;
    email: string;
    bio: string;
    public_repos: string;
    followers:number;
    following: number;
    created_at: string;
    updated_at: string;
}

export interface Repos{
    name: string;
    html_url: string;
    forks_count: number;
    watchers_count: number;
    stargazers_count: number;
}
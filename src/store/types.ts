export interface FeedState {
    data: {
        posts: Post[];
    };
    loading: boolean;
    page: number;
    error?: {
        message: string;
    };
}

export interface UserProfileState {
    data: {
        userDetails: UserDetails | null;
        userPhotos: Post[] | [];
    };
    loading: boolean;
    page: number;
    error?: {
        message: string;
    };
}

export interface Post {
    id: string;
    created_at: string;
    updated_at: string;
    color: string;
    downloads: number;
    likes: number;
    liked: boolean;
    alt_description: string;
    description: string;
    location: {
        name: string;
    };
    urls: {
        raw: string;
        full: string;
        regular: string;
        small: string;
        thumb: string;
    };
    links: {
        download: string;
        download_location: string;
        html: string;
        self: string;
    };
    user: SuggestedUser;
    height: number;
    width: number;
}

export interface SuggestedUser {
    bio?: string;
    first_name?: string;
    id?: string;
    last_name?: string;
    name?: string;
    profile_image?: {
        large: string;
        small: string;
        medium: string;
    };
    total_likes?: number;
    total_photos?: number;
    username?: string;
}

export interface UserDetails {
    id: string;
    username: string;
    name: string;
    first_name: string;
    last_name: string;
    bio: string;
    location: string;
    total_likes: number;
    total_photos: number;
    followers_count: number;
    following_count: number;
    downloads: number;
    social: {
        instagram_username: string;
        twitter_username: string;
    };
    profile_image: {
        small: string;
        medium: string;
        large: string;
    };
    links: {
        self: string;
        html: string;
        photos: string;
        likes: string;
        portfolio: string;
    };
}

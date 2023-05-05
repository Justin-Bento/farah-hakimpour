export interface CategoryItemComponentProps {
  Category: string | string[] | undefined
}

interface IndividualPostsProps {
  _id: string;
  title: string;
}

export interface AllPosts {
  posts: IndividualPostsProps[];
}
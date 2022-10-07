import {GetStaticPaths, GetStaticProps} from "next";

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  return {
    paths: [{params: {id: "1"}}, {params: {id: "2"}}],
    fallback: false, // can also be true or 'blocking'
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: {
      post: {},
    },
  };
};

const Post = ({}) => {
  return <div>few</div>;
};

export default Post;

import { GetServerSideProps, GetServerSidePropsContext } from "next";

export const redirectToLogin = (context: GetServerSidePropsContext) => {
  context.res.setHeader("Location", "/login");
  context.res.statusCode = 302;
};

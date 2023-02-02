// URL=> host/news/anything

import { useRouter } from "next/router";

const DeatailPage = () => {
  const router = useRouter();
  const newsId = router.query.newsId;
  console.log(newsId);

  return <div>{newsId}</div>;
};

export default DeatailPage;

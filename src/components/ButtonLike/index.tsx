import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

interface Data {
  Id: string;
  TotalLikes: number;
}

interface ResponseArray {
  Data: Data[];
}

interface Response {
  Data: Data;
}

export function ButtonLike() {
  const [articles, setArticles] = useState<ResponseArray>();
  const [article, setArticle] = useState<Data>();

  useEffect(() => {
    api.get<ResponseArray>("api/v1/articles").then((res) => {
      setArticles(res.data);
      setArticle(res.data?.Data[0]);
    });
  }, []);

  function addLikeArticle() {
    console.log(article);
    api.put("api/v1/articles/" + article?.Id).then((res) => {
      getArticle();
    });
  }

  function getArticle() {
    api.get<Response>("api/v1/articles/" + article?.Id).then((res) => {
      setArticle(res.data.Data);
    });
  }

  return (
    <>
      <Container>
        <button onClick={addLikeArticle}>Like</button><br />
        <span>Total:</span>    <strong>{article?.TotalLikes}</strong>
      </Container>
    </>
  );
}

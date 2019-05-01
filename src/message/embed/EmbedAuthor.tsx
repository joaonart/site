import React from "react"
import styled from "styled-components"
import { Author } from "./Author"

interface Props {
  author: Author
}

const Container = styled.div`
  display: flex;
  align-items: center;
`

const AuthorImage = styled.img`
  width: 20px;
  height: 20px;

  margin: 0 8px 0 0;

  object-fit: contain;
  border-radius: 50%;
`

const AuthorName = styled.a`
  color: ${(props) => (props.href ? "#0096cf" : "#ffffff")};
  font-size: 14px;
  font-weight: 500;

  text-decoration: none;

  :hover {
    text-decoration: ${(props) => (props.href ? "underline" : "none")};
  }
`

export const EmbedAuthor = (props: Props) => (
  <Container>
    {props.author.iconUrl && <AuthorImage src={props.author.iconUrl} />}
    {props.author.name && (
      <AuthorName href={props.author.url}>{props.author.name}</AuthorName>
    )}
  </Container>
)

import React from "react";
import styled from "styled-components";
import { SearchInput } from "../molcules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";

const users = [...Array(10).keys()].map(val => {
  return {
    id: val,
    name: `jake${val}`,
    image: "https://source.unsplash.com/Sg3XwuEpybU",
    email: "111@aaa.com",
    phone: "000-222-3333",
    company: {
      name: "テスト株式会社"
    },
    website: "httttt.com"
  };
});

console.log(users);

export const Users = () => {
  return (
    <Scontainer>
      <h2>ユーザー一覧</h2>
      <SearchInput />
      <SUserArea>
        {users.map(user => (
          <>
            <UserCard key={user.id} user={user} />
          </>
        ))}
      </SUserArea>
      <SearchInput />
    </Scontainer>
  );
};

const Scontainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;

import { Button, useToast } from "@chakra-ui/react";
import axios from "axios";
import router from "next/router";
import React, { ReactElement, useContext, useState } from "react";
import {Context} from '../../context'
export default function LogoutButton(): ReactElement {
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const { state, dispatch } = useContext(Context);
  const handleLogout = () => {
    setLoading(true);
    axios
      .get("/api/logout")
      .then(({ data }) => {
        window.localStorage.clear();
        dispatch({ type: "CLEAR_USER" });
        toast({
          status: "success",
          description: data.message,
        });
        setLoading(false);
        router.push('/');
      })
      .catch((err) => {
        toast({
          status: "error",
          description: err.message,
        });
      });
  };
  return (
    <div>
      <Button isLoading={loading} onClick={handleLogout}>Logout</Button>
    </div>
  );
}

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const Login = () => {
  const [inputUsername, setInputUsername] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleLogin = () => {
    alert(
      `Username anda : ${inputUsername}, Password anda : ${inputPassword} `
    );
  };

  return (
    <main className="flex flex-col items-center justify-center px-4 py-8 min-h-screen h-[80vh] ">
      <Card className="w-full max-w-md">
        <CardHeader className="flex items-center justify-center">
          <CardTitle>Selamat Datang!</CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            <Label>Username</Label>
            <Input
              id="username"
              onChange={(e) => {
                setInputUsername(e.target.value);
              }}
            />
          </div>
          <div>
            <Label>Password</Label>
            <Input
              id="password"
              onChange={(e) => {
                setInputPassword(e.target.value);
              }}
              type={isChecked ? "text" : "password"}
            />
          </div>

          <div className="flex items-center mt-2 space-x-2">
            <Checkbox
              className="flex items-center justify-center"
              onCheckedChange={(checked) => setIsChecked(checked)}
              id="show-password"
            />
            <Label htmlFor="show-password">Show Password</Label>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col">
          <Button onClick={handleLogin} className="w-full bg-sky-600">
            Login
          </Button>
          <Button variant="link" className="w-full">
            Sign up here!
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
};

export default Login;

import Login from "../../Admin/Auth/Login";
import { Adminprovider } from "../../Admin/context/auth";
export default function Page() {
  return (
    <Adminprovider>
      <Login />
    </Adminprovider>
  );
}

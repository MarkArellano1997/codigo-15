import { Card, Form } from "../../components";
import { inputs } from "./form";
import { useForm } from "../../hooks/useForm";
import { read } from "../../services";
import { useDispatch } from "react-redux";
import { saveUser } from "../../slices/userSlice";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { findUser, showError } from "../../utils";

export default function SignIn() {
  const { values, errors, handleInputChange, validateIfValuesHasEmpty } =
    useForm({
      email: "",
      password: "",
    });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    // verificar que los inputs esten llenos
    if (!validateIfValuesHasEmpty()) return;
    // busquemos en la db de usuario si el correo existe
    const user = await findUser("email", values.email);

    if (!user || user.password !== values.password) {
      showError("Email y/o password incorrecto");
      return;
    }

    // la informacion coincide y debemos enviarlo al home y crear la session
    dispatch(saveUser(user));
    navigate("/");
  };

  return (
    <>
      <div className="h-screen flex items-center pl-20  bg-[url('/background.jpg')] bg-no-repeat bg-center bg-cover">
        <Card className="max-w-md mx-0">
          <h1 className="text-3xl mt-5 mb-3">Login</h1>
          <p className="mb-5">Welcome back! Inicia sesión</p>
          <Form
            inputs={inputs}
            values={values}
            errors={errors}
            textButton="Iniciar Sesión"
            handleFormSubmit={handleSubmit}
            handleInputChange={handleInputChange}
          />
        </Card>
      </div>
    </>
  );
}
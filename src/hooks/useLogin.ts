import { useModalStore } from "@/store/useModalStore";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

export default function useLogin() {
  const router = useRouter();

  // por defecto el modal no se renderiza = {false}
  const isUserNotRegistered = useModalStore(
    (state) => state.modals.modalNotRegistered?.isOpen,
  );
  const setOpened = useModalStore((state) => state.setModalOpen);

  const dataModalNotRegistered = {
    title: "¿Nos conocemos?",
    message:
      "Parece que el correo electrónico introducido no está aún registrado en nuestra plataforma.",
    cta: {
      name: "Registrarme",
      slug: "/register",
    },
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // si el inicio de sesión es correcto, redirigimos a la página de elección de plan
    router.push("/choose");

    // lo he negado para simular el modal
    if (isUserNotRegistered) {
      setOpened("modalNotRegistered", true);
    }
  };

  return {
    handleSubmit,
    isUserNotRegistered,
    dataModalNotRegistered,
  };
}

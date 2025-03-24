import ReservationForm from "../components/ReservationForm";
import ReportForm from "../components/reportFom";
import BaseLayout from "../layout/BaseLayout";

const router = [
  {
    path: "",
    element: <BaseLayout />,
    children: [
      {
        path: "",
        element: <ReservationForm />,
      },
      {
        path:"reporte-cita",
        element:<ReportForm/>
      }
    ],
  },
];
export default router;

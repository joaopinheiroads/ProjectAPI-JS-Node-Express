import express from 'express';
import appointmentController from '.AppointmentController.js';
import patientController from './PacientController.js';
import doctorController from '.DoctorController.js';
import prescriptionController from './PrescriptionController.js';



const router = express.Router();

let requestCount = 0;

router.use((req, res, next) => {
    requestCount++;
    next();
});

router.get("/", function (req, res) {
    console.log(`Alguém fez uma requisição!(${requestCount})`);
    res.status(200).json({message: "Hi!"});
});

router.use("/", appointmentController);
router.use("/", patientController);
router.use("/", doctorController);
router.use("/", prescriptionController);


export default router;
import React, { useEffect, useState } from "react";
import Table from "../../components/Table";
import { Status, Pagination } from "../../components";
import { usePagination } from "../../utils";

import TableTools from "../../components/Table/TableTools";
import { useSWRMutationHook } from "hooks";

import { API_SERVICES_URLS } from "data";

export const testTable = () => {
  const [param, setPatam] = useState({
    sort: "",
    search: "",
    type: "all",
    offset: 5,
    limit: "10",
  });

  const urlParams = new URLSearchParams(param);
  console.log("urlParams ", urlParams.toString());
  function handleChangeUrlParams(name, value) {
    setPatam({ ...param, [name]: value });
  }

  // const data = [
  //   {
  //     _id: "6436965425039600c5b711ff",
  //     invoice: {
  //       client: {
  //         fullName: "mohammed naji",
  //         email: "Mohammed@gmail.com",
  //         address: {
  //           country: "Palestine",
  //         },
  //       },
  //       currency: "USD",
  //       revenue: 0,
  //       fixed: [
  //         {
  //           itemName: "taymaa job",
  //           description: "test invoice",
  //           price: 1000,
  //           _id: "6436aa7425039600c5b71712",
  //         },
  //       ],
  //       freelancer: {
  //         _id: "63e104aa8bba2cb3f754d7db",
  //         firstName: "Heba",
  //         lastName: "SKHAIL",
  //       },
  //       invoiceNo: "INV-394",
  //       status: "ready",
  //     },
  //     type: "invoice",
  //     updatedAt: "2023-04-12T12:56:21.160Z",
  //   },
  //   {
  //     _id: "6436965425039600c5b711ff",
  //     invoice: {
  //       client: {
  //         fullName: "mohammed naji",
  //         email: "Mohammed@gmail.com",
  //         address: {
  //           country: "Palestine",
  //         },
  //       },
  //       currency: "USD",
  //       revenue: 0,
  //       fixed: [
  //         {
  //           itemName: "taymaa job",
  //           description: "test invoice",
  //           price: 1000,
  //           _id: "6436aa7425039600c5b71712",
  //         },
  //       ],
  //       freelancer: {
  //         _id: "63e104aa8bba2cb3f754d7db",
  //         firstName: "Heba",
  //         lastName: "SKHAIL",
  //       },
  //       invoiceNo: "INV-394",
  //       status: "completed",
  //     },
  //     type: "invoice",
  //     updatedAt: "2023-04-12T12:56:21.160Z",
  //   },
  //   {
  //     _id: "6436965425039600c5b711ff",
  //     invoice: {
  //       client: {
  //         fullName: "mohammed naji",
  //         email: "Mohammed@gmail.com",
  //         address: {
  //           country: "Palestine",
  //         },
  //       },
  //       currency: "USD",
  //       revenue: 0,
  //       fixed: [
  //         {
  //           itemName: "taymaa job",
  //           description: "test invoice",
  //           price: 1000,
  //           _id: "6436aa7425039600c5b71712",
  //         },
  //       ],
  //       freelancer: {
  //         _id: "63e104aa8bba2cb3f754d7db",
  //         firstName: "Heba",
  //         lastName: "SKHAIL",
  //       },
  //       invoiceNo: "INV-394",
  //       status: "pending",
  //     },
  //     type: "invoice",
  //     updatedAt: "2023-04-12T12:56:21.160Z",
  //   },
  //   {
  //     _id: "6436965425039600c5b711ff",
  //     invoice: {
  //       client: {
  //         fullName: "mohammed naji",
  //         email: "Mohammed@gmail.com",
  //         address: {
  //           country: "Palestine",
  //         },
  //       },
  //       currency: "USD",
  //       revenue: 0,
  //       fixed: [
  //         {
  //           itemName: "taymaa job",
  //           description: "test invoice",
  //           price: 1000,
  //           _id: "6436aa7425039600c5b71712",
  //         },
  //       ],
  //       freelancer: {
  //         _id: "63e104aa8bba2cb3f754d7db",
  //         firstName: "Heba",
  //         lastName: "SKHAIL",
  //       },
  //       invoiceNo: "INV-394",
  //       status: "ready",
  //     },
  //     type: "invoice",
  //     updatedAt: "2023-04-12T12:56:21.160Z",
  //   },
  //   {
  //     _id: "6436965425039600c5b711ff",
  //     invoice: {
  //       client: {
  //         fullName: "mohammed naji",
  //         email: "Mohammed@gmail.com",
  //         address: {
  //           country: "Palestine",
  //         },
  //       },
  //       currency: "USD",
  //       revenue: 0,
  //       fixed: [
  //         {
  //           itemName: "taymaa job",
  //           description: "test invoice",
  //           price: 1000,
  //           _id: "6436aa7425039600c5b71712",
  //         },
  //       ],
  //       freelancer: {
  //         _id: "63e104aa8bba2cb3f754d7db",
  //         firstName: "Heba",
  //         lastName: "SKHAIL",
  //       },
  //       invoiceNo: "INV-394",
  //       status: "pending_verification",
  //     },
  //     type: "invoice",
  //     updatedAt: "2023-04-12T12:56:21.160Z",
  //   },
  //   {
  //     _id: "6436965425039600c5b711ff",
  //     invoice: {
  //       client: {
  //         fullName: "mohammed naji",
  //         email: "Mohammed@gmail.com",
  //         address: {
  //           country: "Palestine",
  //         },
  //       },
  //       currency: "USD",
  //       revenue: 0,
  //       fixed: [
  //         {
  //           itemName: "taymaa job",
  //           description: "test invoice",
  //           price: 1000,
  //           _id: "6436aa7425039600c5b71712",
  //         },
  //       ],
  //       freelancer: {
  //         _id: "63e104aa8bba2cb3f754d7db",
  //         firstName: "Heba",
  //         lastName: "SKHAIL",
  //       },
  //       invoiceNo: "INV-394",
  //       status: "pending_verification",
  //     },
  //     type: "invoice",
  //     updatedAt: "2023-04-12T12:56:21.160Z",
  //   },
  //   {
  //     _id: "6436965425039600c5b711ff",
  //     invoice: {
  //       client: {
  //         fullName: "mohammed naji",
  //         email: "Mohammed@gmail.com",
  //         address: {
  //           country: "Palestine",
  //         },
  //       },
  //       currency: "USD",
  //       revenue: 0,
  //       fixed: [
  //         {
  //           itemName: "taymaa job",
  //           description: "test invoice",
  //           price: 1000,
  //           _id: "6436aa7425039600c5b71712",
  //         },
  //       ],
  //       freelancer: {
  //         _id: "63e104aa8bba2cb3f754d7db",
  //         firstName: "Heba",
  //         lastName: "SKHAIL",
  //       },
  //       invoiceNo: "INV-394",
  //       status: "pending_verification",
  //     },
  //     type: "invoice",
  //     updatedAt: "2023-04-12T12:56:21.160Z",
  //   },
  //   {
  //     _id: "6436965425039600c5b711ff",
  //     invoice: {
  //       client: {
  //         fullName: "mohammed naji",
  //         email: "Mohammed@gmail.com",
  //         address: {
  //           country: "Palestine",
  //         },
  //       },
  //       currency: "USD",
  //       revenue: 0,
  //       fixed: [
  //         {
  //           itemName: "taymaa job",
  //           description: "test invoice",
  //           price: 1000,
  //           _id: "6436aa7425039600c5b71712",
  //         },
  //       ],
  //       freelancer: {
  //         _id: "63e104aa8bba2cb3f754d7db",
  //         firstName: "Heba",
  //         lastName: "SKHAIL",
  //       },
  //       invoiceNo: "INV-394",
  //       status: "ready",
  //     },
  //     type: "invoice",
  //     updatedAt: "2023-04-12T12:56:21.160Z",
  //   },
  //   {
  //     _id: "6436965425039600c5b711ff",
  //     invoice: {
  //       client: {
  //         fullName: "mohammed naji",
  //         email: "Mohammed@gmail.com",
  //         address: {
  //           country: "Palestine",
  //         },
  //       },
  //       currency: "USD",
  //       revenue: 0,
  //       fixed: [
  //         {
  //           itemName: "taymaa job",
  //           description: "test invoice",
  //           price: 1000,
  //           _id: "6436aa7425039600c5b71712",
  //         },
  //       ],
  //       freelancer: {
  //         _id: "63e104aa8bba2cb3f754d7db",
  //         firstName: "Heba",
  //         lastName: "SKHAIL",
  //       },
  //       invoiceNo: "INV-394",
  //       status: "completed",
  //     },
  //     type: "invoice",
  //     updatedAt: "2023-04-12T12:56:21.160Z",
  //   },
  //   {
  //     _id: "6436965425039600c5b711ff",
  //     invoice: {
  //       client: {
  //         fullName: "mohammed naji",
  //         email: "Mohammed@gmail.com",
  //         address: {
  //           country: "Palestine",
  //         },
  //       },
  //       currency: "USD",
  //       revenue: 0,
  //       fixed: [
  //         {
  //           itemName: "taymaa job",
  //           description: "test invoice",
  //           price: 1000,
  //           _id: "6436aa7425039600c5b71712",
  //         },
  //       ],
  //       freelancer: {
  //         _id: "63e104aa8bba2cb3f754d7db",
  //         firstName: "Heba",
  //         lastName: "SKHAIL",
  //       },
  //       invoiceNo: "INV-394",
  //       status: "pending",
  //     },
  //     type: "invoice",
  //     updatedAt: "2023-04-12T12:56:21.160Z",
  //   },
  //   {
  //     _id: "6436965425039600c5b711ff",
  //     invoice: {
  //       client: {
  //         fullName: "mohammed naji",
  //         email: "Mohammed@gmail.com",
  //         address: {
  //           country: "Palestine",
  //         },
  //       },
  //       currency: "USD",
  //       revenue: 0,
  //       fixed: [
  //         {
  //           itemName: "taymaa job",
  //           description: "test invoice",
  //           price: 1000,
  //           _id: "6436aa7425039600c5b71712",
  //         },
  //       ],
  //       freelancer: {
  //         _id: "63e104aa8bba2cb3f754d7db",
  //         firstName: "Heba",
  //         lastName: "SKHAIL",
  //       },
  //       invoiceNo: "INV-394",
  //       status: "ready",
  //     },
  //     type: "invoice",
  //     updatedAt: "2023-04-12T12:56:21.160Z",
  //   },
  //   {
  //     _id: "6436965425039600c5b711ff",
  //     invoice: {
  //       client: {
  //         fullName: "mohammed naji",
  //         email: "Mohammed@gmail.com",
  //         address: {
  //           country: "Palestine",
  //         },
  //       },
  //       currency: "USD",
  //       revenue: 0,
  //       fixed: [
  //         {
  //           itemName: "taymaa job",
  //           description: "test invoice",
  //           price: 1000,
  //           _id: "6436aa7425039600c5b71712",
  //         },
  //       ],
  //       freelancer: {
  //         _id: "63e104aa8bba2cb3f754d7db",
  //         firstName: "Heba",
  //         lastName: "SKHAIL",
  //       },
  //       invoiceNo: "INV-394",
  //       status: "pending_verification",
  //     },
  //     type: "invoice",
  //     updatedAt: "2023-04-12T12:56:21.160Z",
  //   },
  //   {
  //     _id: "6436965425039600c5b711ff",
  //     invoice: {
  //       client: {
  //         fullName: "mohammed naji",
  //         email: "Mohammed@gmail.com",
  //         address: {
  //           country: "Palestine",
  //         },
  //       },
  //       currency: "USD",
  //       revenue: 0,
  //       fixed: [
  //         {
  //           itemName: "taymaa job",
  //           description: "test invoice",
  //           price: 1000,
  //           _id: "6436aa7425039600c5b71712",
  //         },
  //       ],
  //       freelancer: {
  //         _id: "63e104aa8bba2cb3f754d7db",
  //         firstName: "Heba",
  //         lastName: "SKHAIL",
  //       },
  //       invoiceNo: "INV-394",
  //       status: "pending_verification",
  //     },
  //     type: "invoice",
  //     updatedAt: "2023-04-12T12:56:21.160Z",
  //   },
  //   {
  //     _id: "6436965425039600c5b711ff",
  //     invoice: {
  //       client: {
  //         fullName: "mohammed naji",
  //         email: "Mohammed@gmail.com",
  //         address: {
  //           country: "Palestine",
  //         },
  //       },
  //       currency: "USD",
  //       revenue: 0,
  //       fixed: [
  //         {
  //           itemName: "taymaa job",
  //           description: "test invoice",
  //           price: 1000,
  //           _id: "6436aa7425039600c5b71712",
  //         },
  //       ],
  //       freelancer: {
  //         _id: "63e104aa8bba2cb3f754d7db",
  //         firstName: "Heba",
  //         lastName: "SKHAIL",
  //       },
  //       invoiceNo: "INV-394",
  //       status: "pending_verification",
  //     },
  //     type: "invoice",
  //     updatedAt: "2023-04-12T12:56:21.160Z",
  //   },
  //   {
  //     _id: "6436965425039600c5b711ff",
  //     invoice: {
  //       client: {
  //         fullName: "mohammed naji",
  //         email: "Mohammed@gmail.com",
  //         address: {
  //           country: "Palestine",
  //         },
  //       },
  //       currency: "USD",
  //       revenue: 0,
  //       fixed: [
  //         {
  //           itemName: "taymaa job",
  //           description: "test invoice",
  //           price: 1000,
  //           _id: "6436aa7425039600c5b71712",
  //         },
  //       ],
  //       freelancer: {
  //         _id: "63e104aa8bba2cb3f754d7db",
  //         firstName: "Heba",
  //         lastName: "SKHAIL",
  //       },
  //       invoiceNo: "INV-394",
  //       status: "ready",
  //     },
  //     type: "invoice",
  //     updatedAt: "2023-04-12T12:56:21.160Z",
  //   },
  //   {
  //     _id: "6436965425039600c5b711ff",
  //     invoice: {
  //       client: {
  //         fullName: "mohammed naji",
  //         email: "Mohammed@gmail.com",
  //         address: {
  //           country: "Palestine",
  //         },
  //       },
  //       currency: "USD",
  //       revenue: 0,
  //       fixed: [
  //         {
  //           itemName: "taymaa job",
  //           description: "test invoice",
  //           price: 1000,
  //           _id: "6436aa7425039600c5b71712",
  //         },
  //       ],
  //       freelancer: {
  //         _id: "63e104aa8bba2cb3f754d7db",
  //         firstName: "Heba",
  //         lastName: "SKHAIL",
  //       },
  //       invoiceNo: "INV-394",
  //       status: "completed",
  //     },
  //     type: "invoice",
  //     updatedAt: "2023-04-12T12:56:21.160Z",
  //   },
  //   {
  //     _id: "6436965425039600c5b711ff",
  //     invoice: {
  //       client: {
  //         fullName: "mohammed naji",
  //         email: "Mohammed@gmail.com",
  //         address: {
  //           country: "Palestine",
  //         },
  //       },
  //       currency: "USD",
  //       revenue: 0,
  //       fixed: [
  //         {
  //           itemName: "taymaa job",
  //           description: "test invoice",
  //           price: 1000,
  //           _id: "6436aa7425039600c5b71712",
  //         },
  //       ],
  //       freelancer: {
  //         _id: "63e104aa8bba2cb3f754d7db",
  //         firstName: "Heba",
  //         lastName: "SKHAIL",
  //       },
  //       invoiceNo: "INV-394",
  //       status: "pending",
  //     },
  //     type: "invoice",
  //     updatedAt: "2023-04-12T12:56:21.160Z",
  //   },
  //   {
  //     _id: "6436965425039600c5b711ff",
  //     invoice: {
  //       client: {
  //         fullName: "mohammed naji",
  //         email: "Mohammed@gmail.com",
  //         address: {
  //           country: "Palestine",
  //         },
  //       },
  //       currency: "USD",
  //       revenue: 0,
  //       fixed: [
  //         {
  //           itemName: "taymaa job",
  //           description: "test invoice",
  //           price: 1000,
  //           _id: "6436aa7425039600c5b71712",
  //         },
  //       ],
  //       freelancer: {
  //         _id: "63e104aa8bba2cb3f754d7db",
  //         firstName: "Heba",
  //         lastName: "SKHAIL",
  //       },
  //       invoiceNo: "INV-394",
  //       status: "ready",
  //     },
  //     type: "invoice",
  //     updatedAt: "2023-04-12T12:56:21.160Z",
  //   },
  //   {
  //     _id: "6436965425039600c5b711ff",
  //     invoice: {
  //       client: {
  //         fullName: "mohammed naji",
  //         email: "Mohammed@gmail.com",
  //         address: {
  //           country: "Palestine",
  //         },
  //       },
  //       currency: "USD",
  //       revenue: 0,
  //       fixed: [
  //         {
  //           itemName: "taymaa job",
  //           description: "test invoice",
  //           price: 1000,
  //           _id: "6436aa7425039600c5b71712",
  //         },
  //       ],
  //       freelancer: {
  //         _id: "63e104aa8bba2cb3f754d7db",
  //         firstName: "Heba",
  //         lastName: "SKHAIL",
  //       },
  //       invoiceNo: "INV-394",
  //       status: "pending_verification",
  //     },
  //     type: "invoice",
  //     updatedAt: "2023-04-12T12:56:21.160Z",
  //   },
  //   {
  //     _id: "6436965425039600c5b711ff",
  //     invoice: {
  //       client: {
  //         fullName: "mohammed naji",
  //         email: "Mohammed@gmail.com",
  //         address: {
  //           country: "Palestine",
  //         },
  //       },
  //       currency: "USD",
  //       revenue: 0,
  //       fixed: [
  //         {
  //           itemName: "taymaa job",
  //           description: "test invoice",
  //           price: 1000,
  //           _id: "6436aa7425039600c5b71712",
  //         },
  //       ],
  //       freelancer: {
  //         _id: "63e104aa8bba2cb3f754d7db",
  //         firstName: "Heba",
  //         lastName: "SKHAIL",
  //       },
  //       invoiceNo: "INV-394",
  //       status: "pending_verification",
  //     },
  //     type: "invoice",
  //     updatedAt: "2023-04-12T12:56:21.160Z",
  //   },
  //   {
  //     _id: "6436965425039600c5b711ff",
  //     invoice: {
  //       client: {
  //         fullName: "mohammed naji",
  //         email: "Mohammed@gmail.com",
  //         address: {
  //           country: "Palestine",
  //         },
  //       },
  //       currency: "USD",
  //       revenue: 0,
  //       fixed: [
  //         {
  //           itemName: "taymaa job",
  //           description: "test invoice",
  //           price: 1000,
  //           _id: "6436aa7425039600c5b71712",
  //         },
  //       ],
  //       freelancer: {
  //         _id: "63e104aa8bba2cb3f754d7db",
  //         firstName: "Heba",
  //         lastName: "SKHAIL",
  //       },
  //       invoiceNo: "INV-394",
  //       status: "pending_verification",
  //     },
  //     type: "invoice",
  //     updatedAt: "2023-04-12T12:56:21.160Z",
  //   },
  //   {
  //     _id: "6436965425039600c5b711ff",
  //     invoice: {
  //       client: {
  //         fullName: "mohammed naji",
  //         email: "Mohammed@gmail.com",
  //         address: {
  //           country: "Palestine",
  //         },
  //       },
  //       currency: "USD",
  //       revenue: 0,
  //       fixed: [
  //         {
  //           itemName: "taymaa job",
  //           description: "test invoice",
  //           price: 1000,
  //           _id: "6436aa7425039600c5b71712",
  //         },
  //       ],
  //       freelancer: {
  //         _id: "63e104aa8bba2cb3f754d7db",
  //         firstName: "Heba",
  //         lastName: "SKHAIL",
  //       },
  //       invoiceNo: "INV-394",
  //       status: "ready",
  //     },
  //     type: "invoice",
  //     updatedAt: "2023-04-12T12:56:21.160Z",
  //   },
  //   {
  //     _id: "6436965425039600c5b711ff",
  //     invoice: {
  //       client: {
  //         fullName: "mohammed naji",
  //         email: "Mohammed@gmail.com",
  //         address: {
  //           country: "Palestine",
  //         },
  //       },
  //       currency: "USD",
  //       revenue: 0,
  //       fixed: [
  //         {
  //           itemName: "taymaa job",
  //           description: "test invoice",
  //           price: 1000,
  //           _id: "6436aa7425039600c5b71712",
  //         },
  //       ],
  //       freelancer: {
  //         _id: "63e104aa8bba2cb3f754d7db",
  //         firstName: "Heba",
  //         lastName: "SKHAIL",
  //       },
  //       invoiceNo: "INV-394",
  //       status: "completed",
  //     },
  //     type: "invoice",
  //     updatedAt: "2023-04-12T12:56:21.160Z",
  //   },
  //   {
  //     _id: "6436965425039600c5b711ff",
  //     invoice: {
  //       client: {
  //         fullName: "mohammed naji",
  //         email: "Mohammed@gmail.com",
  //         address: {
  //           country: "Palestine",
  //         },
  //       },
  //       currency: "USD",
  //       revenue: 0,
  //       fixed: [
  //         {
  //           itemName: "taymaa job",
  //           description: "test invoice",
  //           price: 1000,
  //           _id: "6436aa7425039600c5b71712",
  //         },
  //       ],
  //       freelancer: {
  //         _id: "63e104aa8bba2cb3f754d7db",
  //         firstName: "Heba",
  //         lastName: "SKHAIL",
  //       },
  //       invoiceNo: "INV-394",
  //       status: "pending",
  //     },
  //     type: "invoice",
  //     updatedAt: "2023-04-12T12:56:21.160Z",
  //   },
  //   {
  //     _id: "6436965425039600c5b711ff",
  //     invoice: {
  //       client: {
  //         fullName: "mohammed naji",
  //         email: "Mohammed@gmail.com",
  //         address: {
  //           country: "Palestine",
  //         },
  //       },
  //       currency: "USD",
  //       revenue: 0,
  //       fixed: [
  //         {
  //           itemName: "taymaa job",
  //           description: "test invoice",
  //           price: 1000,
  //           _id: "6436aa7425039600c5b71712",
  //         },
  //       ],
  //       freelancer: {
  //         _id: "63e104aa8bba2cb3f754d7db",
  //         firstName: "Heba",
  //         lastName: "SKHAIL",
  //       },
  //       invoiceNo: "INV-394",
  //       status: "ready",
  //     },
  //     type: "invoice",
  //     updatedAt: "2023-04-12T12:56:21.160Z",
  //   },
  //   {
  //     _id: "6436965425039600c5b711ff",
  //     invoice: {
  //       client: {
  //         fullName: "mohammed naji",
  //         email: "Mohammed@gmail.com",
  //         address: {
  //           country: "Palestine",
  //         },
  //       },
  //       currency: "USD",
  //       revenue: 0,
  //       fixed: [
  //         {
  //           itemName: "taymaa job",
  //           description: "test invoice",
  //           price: 1000,
  //           _id: "6436aa7425039600c5b71712",
  //         },
  //       ],
  //       freelancer: {
  //         _id: "63e104aa8bba2cb3f754d7db",
  //         firstName: "Heba",
  //         lastName: "SKHAIL",
  //       },
  //       invoiceNo: "INV-394",
  //       status: "pending_verification",
  //     },
  //     type: "invoice",
  //     updatedAt: "2023-04-12T12:56:21.160Z",
  //   },
  //   {
  //     _id: "6436965425039600c5b711ff",
  //     invoice: {
  //       client: {
  //         fullName: "mohammed naji",
  //         email: "Mohammed@gmail.com",
  //         address: {
  //           country: "Palestine",
  //         },
  //       },
  //       currency: "USD",
  //       revenue: 0,
  //       fixed: [
  //         {
  //           itemName: "taymaa job",
  //           description: "test invoice",
  //           price: 1000,
  //           _id: "6436aa7425039600c5b71712",
  //         },
  //       ],
  //       freelancer: {
  //         _id: "63e104aa8bba2cb3f754d7db",
  //         firstName: "Heba",
  //         lastName: "SKHAIL",
  //       },
  //       invoiceNo: "INV-394",
  //       status: "pending_verification",
  //     },
  //     type: "invoice",
  //     updatedAt: "2023-04-12T12:56:21.160Z",
  //   },
  //   {
  //     _id: "6436965425039600c5b711ff",
  //     invoice: {
  //       client: {
  //         fullName: "mohammed naji",
  //         email: "Mohammed@gmail.com",
  //         address: {
  //           country: "Palestine",
  //         },
  //       },
  //       currency: "USD",
  //       revenue: 0,
  //       fixed: [
  //         {
  //           itemName: "taymaa job",
  //           description: "test invoice",
  //           price: 1000,
  //           _id: "6436aa7425039600c5b71712",
  //         },
  //       ],
  //       freelancer: {
  //         _id: "63e104aa8bba2cb3f754d7db",
  //         firstName: "Heba",
  //         lastName: "SKHAIL",
  //       },
  //       invoiceNo: "INV-394",
  //       status: "pending_verification",
  //     },
  //     type: "invoice",
  //     updatedAt: "2023-04-12T12:56:21.160Z",
  //   },
  //   {
  //     _id: "6436965425039600c5b711ff",
  //     invoice: {
  //       client: {
  //         fullName: "mohammed naji",
  //         email: "Mohammed@gmail.com",
  //         address: {
  //           country: "Palestine",
  //         },
  //       },
  //       currency: "USD",
  //       revenue: 0,
  //       fixed: [
  //         {
  //           itemName: "taymaa job",
  //           description: "test invoice",
  //           price: 1000,
  //           _id: "6436aa7425039600c5b71712",
  //         },
  //       ],
  //       freelancer: {
  //         _id: "63e104aa8bba2cb3f754d7db",
  //         firstName: "Heba",
  //         lastName: "SKHAIL",
  //       },
  //       invoiceNo: "INV-394",
  //       status: "ready",
  //     },
  //     type: "invoice",
  //     updatedAt: "2023-04-12T12:56:21.160Z",
  //   },
  //   {
  //     _id: "6436965425039600c5b711ff",
  //     invoice: {
  //       client: {
  //         fullName: "mohammed naji",
  //         email: "Mohammed@gmail.com",
  //         address: {
  //           country: "Palestine",
  //         },
  //       },
  //       currency: "USD",
  //       revenue: 0,
  //       fixed: [
  //         {
  //           itemName: "taymaa job",
  //           description: "test invoice",
  //           price: 1000,
  //           _id: "6436aa7425039600c5b71712",
  //         },
  //       ],
  //       freelancer: {
  //         _id: "63e104aa8bba2cb3f754d7db",
  //         firstName: "Heba",
  //         lastName: "SKHAIL",
  //       },
  //       invoiceNo: "INV-394",
  //       status: "completed",
  //     },
  //     type: "invoice",
  //     updatedAt: "2023-04-12T12:56:21.160Z",
  //   },
  //   {
  //     _id: "6436965425039600c5b711ff",
  //     invoice: {
  //       client: {
  //         fullName: "mohammed naji",
  //         email: "Mohammed@gmail.com",
  //         address: {
  //           country: "Palestine",
  //         },
  //       },
  //       currency: "USD",
  //       revenue: 0,
  //       fixed: [
  //         {
  //           itemName: "taymaa job",
  //           description: "test invoice",
  //           price: 1000,
  //           _id: "6436aa7425039600c5b71712",
  //         },
  //       ],
  //       freelancer: {
  //         _id: "63e104aa8bba2cb3f754d7db",
  //         firstName: "Heba",
  //         lastName: "SKHAIL",
  //       },
  //       invoiceNo: "INV-394",
  //       status: "pending",
  //     },
  //     type: "invoice",
  //     updatedAt: "2023-04-12T12:56:21.160Z",
  //   },
  //   {
  //     _id: "6436965425039600c5b711ff",
  //     invoice: {
  //       client: {
  //         fullName: "mohammed naji",
  //         email: "Mohammed@gmail.com",
  //         address: {
  //           country: "Palestine",
  //         },
  //       },
  //       currency: "USD",
  //       revenue: 0,
  //       fixed: [
  //         {
  //           itemName: "taymaa job",
  //           description: "test invoice",
  //           price: 1000,
  //           _id: "6436aa7425039600c5b71712",
  //         },
  //       ],
  //       freelancer: {
  //         _id: "63e104aa8bba2cb3f754d7db",
  //         firstName: "Heba",
  //         lastName: "SKHAIL",
  //       },
  //       invoiceNo: "INV-394",
  //       status: "ready",
  //     },
  //     type: "invoice",
  //     updatedAt: "2023-04-12T12:56:21.160Z",
  //   },
  //   {
  //     _id: "6436965425039600c5b711ff",
  //     invoice: {
  //       client: {
  //         fullName: "mohammed naji",
  //         email: "Mohammed@gmail.com",
  //         address: {
  //           country: "Palestine",
  //         },
  //       },
  //       currency: "USD",
  //       revenue: 0,
  //       fixed: [
  //         {
  //           itemName: "taymaa job",
  //           description: "test invoice",
  //           price: 1000,
  //           _id: "6436aa7425039600c5b71712",
  //         },
  //       ],
  //       freelancer: {
  //         _id: "63e104aa8bba2cb3f754d7db",
  //         firstName: "Heba",
  //         lastName: "SKHAIL",
  //       },
  //       invoiceNo: "INV-394",
  //       status: "pending_verification",
  //     },
  //     type: "invoice",
  //     updatedAt: "2023-04-12T12:56:21.160Z",
  //   },
  //   {
  //     _id: "6436965425039600c5b711ff",
  //     invoice: {
  //       client: {
  //         fullName: "mohammed naji",
  //         email: "Mohammed@gmail.com",
  //         address: {
  //           country: "Palestine",
  //         },
  //       },
  //       currency: "USD",
  //       revenue: 0,
  //       fixed: [
  //         {
  //           itemName: "taymaa job",
  //           description: "test invoice",
  //           price: 1000,
  //           _id: "6436aa7425039600c5b71712",
  //         },
  //       ],
  //       freelancer: {
  //         _id: "63e104aa8bba2cb3f754d7db",
  //         firstName: "Heba",
  //         lastName: "SKHAIL",
  //       },
  //       invoiceNo: "INV-394",
  //       status: "pending_verification",
  //     },
  //     type: "invoice",
  //     updatedAt: "2023-04-12T12:56:21.160Z",
  //   },
  //   {
  //     _id: "6436965425039600c5b711ff",
  //     invoice: {
  //       client: {
  //         fullName: "mohammed naji",
  //         email: "Mohammed@gmail.com",
  //         address: {
  //           country: "Palestine",
  //         },
  //       },
  //       currency: "USD",
  //       revenue: 0,
  //       fixed: [
  //         {
  //           itemName: "taymaa job",
  //           description: "test invoice",
  //           price: 1000,
  //           _id: "6436aa7425039600c5b71712",
  //         },
  //       ],
  //       freelancer: {
  //         _id: "63e104aa8bba2cb3f754d7db",
  //         firstName: "Heba",
  //         lastName: "SKHAIL",
  //       },
  //       invoiceNo: "INV-394",
  //       status: "pending_verification",
  //     },
  //     type: "invoice",
  //     updatedAt: "2023-04-12T12:56:21.160Z",
  //   },
  //   {
  //     _id: "6436965425039600c5b711ff",
  //     invoice: {
  //       client: {
  //         fullName: "mohammed naji",
  //         email: "Mohammed@gmail.com",
  //         address: {
  //           country: "Palestine",
  //         },
  //       },
  //       currency: "USD",
  //       revenue: 0,
  //       fixed: [
  //         {
  //           itemName: "taymaa job",
  //           description: "test invoice",
  //           price: 1000,
  //           _id: "6436aa7425039600c5b71712",
  //         },
  //       ],
  //       freelancer: {
  //         _id: "63e104aa8bba2cb3f754d7db",
  //         firstName: "Heba",
  //         lastName: "SKHAIL",
  //       },
  //       invoiceNo: "INV-394",
  //       status: "ready",
  //     },
  //     type: "invoice",
  //     updatedAt: "2023-04-12T12:56:21.160Z",
  //   },
  //   {
  //     _id: "6436965425039600c5b711ff",
  //     invoice: {
  //       client: {
  //         fullName: "mohammed naji",
  //         email: "Mohammed@gmail.com",
  //         address: {
  //           country: "Palestine",
  //         },
  //       },
  //       currency: "USD",
  //       revenue: 0,
  //       fixed: [
  //         {
  //           itemName: "taymaa job",
  //           description: "test invoice",
  //           price: 1000,
  //           _id: "6436aa7425039600c5b71712",
  //         },
  //       ],
  //       freelancer: {
  //         _id: "63e104aa8bba2cb3f754d7db",
  //         firstName: "Heba",
  //         lastName: "SKHAIL",
  //       },
  //       invoiceNo: "INV-394",
  //       status: "completed",
  //     },
  //     type: "invoice",
  //     updatedAt: "2023-04-12T12:56:21.160Z",
  //   },
  //   {
  //     _id: "6436965425039600c5b711ff",
  //     invoice: {
  //       client: {
  //         fullName: "mohammed naji",
  //         email: "Mohammed@gmail.com",
  //         address: {
  //           country: "Palestine",
  //         },
  //       },
  //       currency: "USD",
  //       revenue: 0,
  //       fixed: [
  //         {
  //           itemName: "taymaa job",
  //           description: "test invoice",
  //           price: 1000,
  //           _id: "6436aa7425039600c5b71712",
  //         },
  //       ],
  //       freelancer: {
  //         _id: "63e104aa8bba2cb3f754d7db",
  //         firstName: "Heba",
  //         lastName: "SKHAIL",
  //       },
  //       invoiceNo: "INV-394",
  //       status: "pending",
  //     },
  //     type: "invoice",
  //     updatedAt: "2023-04-12T12:56:21.160Z",
  //   },
  //   {
  //     _id: "6436965425039600c5b711ff",
  //     invoice: {
  //       client: {
  //         fullName: "mohammed naji",
  //         email: "Mohammed@gmail.com",
  //         address: {
  //           country: "Palestine",
  //         },
  //       },
  //       currency: "USD",
  //       revenue: 0,
  //       fixed: [
  //         {
  //           itemName: "taymaa job",
  //           description: "test invoice",
  //           price: 1000,
  //           _id: "6436aa7425039600c5b71712",
  //         },
  //       ],
  //       freelancer: {
  //         _id: "63e104aa8bba2cb3f754d7db",
  //         firstName: "Heba",
  //         lastName: "SKHAIL",
  //       },
  //       invoiceNo: "INV-394",
  //       status: "ready",
  //     },
  //     type: "invoice",
  //     updatedAt: "2023-04-12T12:56:21.160Z",
  //   },
  //   {
  //     _id: "6436965425039600c5b711ff",
  //     invoice: {
  //       client: {
  //         fullName: "mohammed naji",
  //         email: "Mohammed@gmail.com",
  //         address: {
  //           country: "Palestine",
  //         },
  //       },
  //       currency: "USD",
  //       revenue: 0,
  //       fixed: [
  //         {
  //           itemName: "taymaa job",
  //           description: "test invoice",
  //           price: 1000,
  //           _id: "6436aa7425039600c5b71712",
  //         },
  //       ],
  //       freelancer: {
  //         _id: "63e104aa8bba2cb3f754d7db",
  //         firstName: "Heba",
  //         lastName: "SKHAIL",
  //       },
  //       invoiceNo: "INV-394",
  //       status: "pending_verification",
  //     },
  //     type: "invoice",
  //     updatedAt: "2023-04-12T12:56:21.160Z",
  //   },
  //   {
  //     _id: "6436965425039600c5b711ff",
  //     invoice: {
  //       client: {
  //         fullName: "mohammed naji",
  //         email: "Mohammed@gmail.com",
  //         address: {
  //           country: "Palestine",
  //         },
  //       },
  //       currency: "USD",
  //       revenue: 0,
  //       fixed: [
  //         {
  //           itemName: "taymaa job",
  //           description: "test invoice",
  //           price: 1000,
  //           _id: "6436aa7425039600c5b71712",
  //         },
  //       ],
  //       freelancer: {
  //         _id: "63e104aa8bba2cb3f754d7db",
  //         firstName: "Heba",
  //         lastName: "SKHAIL",
  //       },
  //       invoiceNo: "INV-394",
  //       status: "pending_verification",
  //     },
  //     type: "invoice",
  //     updatedAt: "2023-04-12T12:56:21.160Z",
  //   },
  //   {
  //     _id: "6436965425039600c5b711ff",
  //     invoice: {
  //       client: {
  //         fullName: "mohammed naji",
  //         email: "Mohammed@gmail.com",
  //         address: {
  //           country: "Palestine",
  //         },
  //       },
  //       currency: "USD",
  //       revenue: 0,
  //       fixed: [
  //         {
  //           itemName: "taymaa job",
  //           description: "test invoice",
  //           price: 1000,
  //           _id: "6436aa7425039600c5b71712",
  //         },
  //       ],
  //       freelancer: {
  //         _id: "63e104aa8bba2cb3f754d7db",
  //         firstName: "Heba",
  //         lastName: "SKHAIL",
  //       },
  //       invoiceNo: "INV-394",
  //       status: "pending_verification",
  //     },
  //     type: "invoice",
  //     updatedAt: "2023-04-12T12:56:21.160Z",
  //   },
  //   {
  //     _id: "6436965425039600c5b711ff",
  //     invoice: {
  //       client: {
  //         fullName: "mohammed naji",
  //         email: "Mohammed@gmail.com",
  //         address: {
  //           country: "Palestine",
  //         },
  //       },
  //       currency: "USD",
  //       revenue: 0,
  //       fixed: [
  //         {
  //           itemName: "taymaa job",
  //           description: "test invoice",
  //           price: 1000,
  //           _id: "6436aa7425039600c5b71712",
  //         },
  //       ],
  //       freelancer: {
  //         _id: "63e104aa8bba2cb3f754d7db",
  //         firstName: "Heba",
  //         lastName: "SKHAIL",
  //       },
  //       invoiceNo: "INV-394",
  //       status: "ready",
  //     },
  //     type: "invoice",
  //     updatedAt: "2023-04-12T12:56:21.160Z",
  //   },
  //   {
  //     _id: "6436965425039600c5b711ff",
  //     invoice: {
  //       client: {
  //         fullName: "mohammed naji",
  //         email: "Mohammed@gmail.com",
  //         address: {
  //           country: "Palestine",
  //         },
  //       },
  //       currency: "USD",
  //       revenue: 0,
  //       fixed: [
  //         {
  //           itemName: "taymaa job",
  //           description: "test invoice",
  //           price: 1000,
  //           _id: "6436aa7425039600c5b71712",
  //         },
  //       ],
  //       freelancer: {
  //         _id: "63e104aa8bba2cb3f754d7db",
  //         firstName: "Heba",
  //         lastName: "SKHAIL",
  //       },
  //       invoiceNo: "INV-394",
  //       status: "completed",
  //     },
  //     type: "invoice",
  //     updatedAt: "2023-04-12T12:56:21.160Z",
  //   },
  //   {
  //     _id: "6436965425039600c5b711ff",
  //     invoice: {
  //       client: {
  //         fullName: "mohammed naji",
  //         email: "Mohammed@gmail.com",
  //         address: {
  //           country: "Palestine",
  //         },
  //       },
  //       currency: "USD",
  //       revenue: 0,
  //       fixed: [
  //         {
  //           itemName: "taymaa job",
  //           description: "test invoice",
  //           price: 1000,
  //           _id: "6436aa7425039600c5b71712",
  //         },
  //       ],
  //       freelancer: {
  //         _id: "63e104aa8bba2cb3f754d7db",
  //         firstName: "Heba",
  //         lastName: "SKHAIL",
  //       },
  //       invoiceNo: "INV-394",
  //       status: "pending",
  //     },
  //     type: "invoice",
  //     updatedAt: "2023-04-12T12:56:21.160Z",
  //   },
  //   {
  //     _id: "6436965425039600c5b711ff",
  //     invoice: {
  //       client: {
  //         fullName: "mohammed naji",
  //         email: "Mohammed@gmail.com",
  //         address: {
  //           country: "Palestine",
  //         },
  //       },
  //       currency: "USD",
  //       revenue: 0,
  //       fixed: [
  //         {
  //           itemName: "taymaa job",
  //           description: "test invoice",
  //           price: 1000,
  //           _id: "6436aa7425039600c5b71712",
  //         },
  //       ],
  //       freelancer: {
  //         _id: "63e104aa8bba2cb3f754d7db",
  //         firstName: "Heba",
  //         lastName: "SKHAIL",
  //       },
  //       invoiceNo: "INV-394",
  //       status: "ready",
  //     },
  //     type: "invoice",
  //     updatedAt: "2023-04-12T12:56:21.160Z",
  //   },
  //   {
  //     _id: "6436965425039600c5b711ff",
  //     invoice: {
  //       client: {
  //         fullName: "mohammed naji",
  //         email: "Mohammed@gmail.com",
  //         address: {
  //           country: "Palestine",
  //         },
  //       },
  //       currency: "USD",
  //       revenue: 0,
  //       fixed: [
  //         {
  //           itemName: "taymaa job",
  //           description: "test invoice",
  //           price: 1000,
  //           _id: "6436aa7425039600c5b71712",
  //         },
  //       ],
  //       freelancer: {
  //         _id: "63e104aa8bba2cb3f754d7db",
  //         firstName: "Heba",
  //         lastName: "SKHAIL",
  //       },
  //       invoiceNo: "INV-394",
  //       status: "pending_verification",
  //     },
  //     type: "invoice",
  //     updatedAt: "2023-04-12T12:56:21.160Z",
  //   },
  //   {
  //     _id: "6436965425039600c5b711ff",
  //     invoice: {
  //       client: {
  //         fullName: "mohammed naji",
  //         email: "Mohammed@gmail.com",
  //         address: {
  //           country: "Palestine",
  //         },
  //       },
  //       currency: "USD",
  //       revenue: 0,
  //       fixed: [
  //         {
  //           itemName: "taymaa job",
  //           description: "test invoice",
  //           price: 1000,
  //           _id: "6436aa7425039600c5b71712",
  //         },
  //       ],
  //       freelancer: {
  //         _id: "63e104aa8bba2cb3f754d7db",
  //         firstName: "Heba",
  //         lastName: "SKHAIL",
  //       },
  //       invoiceNo: "INV-394",
  //       status: "pending_verification",
  //     },
  //     type: "invoice",
  //     updatedAt: "2023-04-12T12:56:21.160Z",
  //   },
  //   {
  //     _id: "6436965425039600c5b711ff",
  //     invoice: {
  //       client: {
  //         fullName: "mohammed naji",
  //         email: "Mohammed@gmail.com",
  //         address: {
  //           country: "Palestine",
  //         },
  //       },
  //       currency: "USD",
  //       revenue: 0,
  //       fixed: [
  //         {
  //           itemName: "taymaa job",
  //           description: "test invoice",
  //           price: 1000,
  //           _id: "6436aa7425039600c5b71712",
  //         },
  //       ],
  //       freelancer: {
  //         _id: "63e104aa8bba2cb3f754d7db",
  //         firstName: "Heba",
  //         lastName: "SKHAIL",
  //       },
  //       invoiceNo: "INV-394",
  //       status: "pending_verification",
  //     },
  //     type: "invoice",
  //     updatedAt: "2023-04-12T12:56:21.160Z",
  //   },
  //   {
  //     _id: "6436965425039600c5b711ff",
  //     invoice: {
  //       client: {
  //         fullName: "mohammed naji",
  //         email: "Mohammed@gmail.com",
  //         address: {
  //           country: "Palestine",
  //         },
  //       },
  //       currency: "USD",
  //       revenue: 0,
  //       fixed: [
  //         {
  //           itemName: "taymaa job",
  //           description: "test invoice",
  //           price: 1000,
  //           _id: "6436aa7425039600c5b71712",
  //         },
  //       ],
  //       freelancer: {
  //         _id: "63e104aa8bba2cb3f754d7db",
  //         firstName: "Heba",
  //         lastName: "SKHAIL",
  //       },
  //       invoiceNo: "INV-394",
  //       status: "pending_verification",
  //     },
  //     type: "invoice",
  //     updatedAt: "2023-04-12T12:56:21.160Z",
  //   },
  //   {
  //     _id: "6436965425039600c5b711ff",
  //     invoice: {
  //       client: {
  //         fullName: "mohammed naji",
  //         email: "Mohammed@gmail.com",
  //         address: {
  //           country: "Palestine",
  //         },
  //       },
  //       currency: "USD",
  //       revenue: 0,
  //       fixed: [
  //         {
  //           itemName: "taymaa job",
  //           description: "test invoice",
  //           price: 1000,
  //           _id: "6436aa7425039600c5b71712",
  //         },
  //       ],
  //       freelancer: {
  //         _id: "63e104aa8bba2cb3f754d7db",
  //         firstName: "Heba",
  //         lastName: "SKHAIL",
  //       },
  //       invoiceNo: "INV-394",
  //       status: "paid",
  //     },
  //     type: "invoice",
  //     updatedAt: "2023-04-12T12:56:21.160Z",
  //   },
  //   {
  //     _id: "6436965425039600c5b711ff",
  //     invoice: {
  //       client: {
  //         fullName: "mohammed naji",
  //         email: "Mohammed@gmail.com",
  //         address: {
  //           country: "Palestine",
  //         },
  //       },
  //       currency: "USD",
  //       revenue: 0,
  //       fixed: [
  //         {
  //           itemName: "taymaa job",
  //           description: "test invoice",
  //           price: 1000,
  //           _id: "6436aa7425039600c5b71712",
  //         },
  //       ],
  //       freelancer: {
  //         _id: "63e104aa8bba2cb3f754d7db",
  //         firstName: "Heba",
  //         lastName: "SKHAIL",
  //       },
  //       invoiceNo: "INV-394",
  //       status: "sent",
  //     },
  //     type: "invoice",
  //     updatedAt: "2023-04-12T12:56:21.160Z",
  //   },
  //   {
  //     _id: "64369a4425039600c5b712fc",
  //     invoice: {
  //       client: {
  //         fullName: "mohammedd najii",
  //         email: "emial@gmail.comm",
  //         address: {
  //           country: "Andorra (AD)",
  //         },
  //       },
  //       currency: "USD",
  //       revenue: 0,
  //       fixed: [
  //         {
  //           itemName: "job details11",
  //           description: "description",
  //           price: 300,
  //           _id: "64369d8725039600c5b71464",
  //         },
  //         {
  //           itemName: "job details22",
  //           description: "description",
  //           price: 300,
  //           _id: "64369d8725039600c5b71465",
  //         },
  //       ],
  //       freelancer: {
  //         _id: "63e104aa8bba2cb3f754d7db",
  //         firstName: "Heba",
  //         lastName: "SKHAIL",
  //       },
  //       invoiceNo: "INV-398",
  //       status: "cancnlled",
  //     },
  //     type: "invoice",
  //     updatedAt: "2023-04-12T12:01:11.489Z",
  //   },
  //   {
  //     _id: "64369a5a25039600c5b71317",
  //     invoice: {
  //       client: {
  //         _id: "63e104aa8bba2cb3f754d7db",
  //         mobile: "+970597039224",
  //         email: "hebaskhail@gmail.com",
  //         address: {
  //           country: "Palestine",
  //         },
  //       },
  //       currency: "USD",
  //       revenue: 0,
  //       fixed: [
  //         {
  //           itemName: "UI/UX Design for Noon Website",
  //           description: "UI/UX Design for Noon Website",
  //           price: 200,
  //           _id: "64369a5a25039600c5b7130f",
  //         },
  //         {
  //           itemName: "Marketing for small bussiness application",
  //           description: "Marketing for small bussiness applicatio",
  //           price: 200,
  //           _id: "64369a5a25039600c5b71310",
  //         },
  //         {
  //           itemName: "React Native Mobile App Development",
  //           description: "React Native Mobile App Development",
  //           price: 500,
  //           _id: "64369a5a25039600c5b71311",
  //         },
  //       ],
  //       freelancer: {
  //         _id: "631c4d88c5328aa79e0d781e",
  //         firstName: "Heba",
  //         lastName: "Team",
  //       },
  //       invoiceNo: "INV-399",
  //       status: "pending_approval",
  //     },
  //     type: "invoice",
  //     updatedAt: "2023-04-12T11:47:38.748Z",
  //   },
  //   {
  //     _id: "6436997d25039600c5b712a7",
  //     invoice: {
  //       client: {
  //         _id: "6436997d25039600c5b7129e",
  //         fullName: "mohammed naji",
  //         email: "emial@gmail.com",
  //         address: {
  //           country: "Andorra (AD)",
  //         },
  //       },
  //       currency: "EUR",
  //       revenue: 0,
  //       fixed: [
  //         {
  //           itemName: "job 1 ",
  //           description: "description",
  //           price: 10,
  //           _id: "6436997d25039600c5b712a3",
  //         },
  //       ],
  //       freelancer: {
  //         _id: "63e104aa8bba2cb3f754d7db",
  //         firstName: "Heba",
  //         lastName: "SKHAIL",
  //       },
  //       invoiceNo: "INV-397",
  //       status: "pending_verification",
  //     },
  //     type: "invoice",
  //     updatedAt: "2023-04-12T11:43:57.961Z",
  //   },
  //   {
  //     _id: "643696f225039600c5b71232",
  //     invoice: {
  //       client: {
  //         _id: "636bbb547574ca054f48b8fa",
  //         mobile: "+970525566968",
  //         email: "mohammed@gmail.com",
  //         address: {
  //           country: "Andorra (AD)",
  //         },
  //       },
  //       currency: "ILS",
  //       revenue: 0,
  //       fixed: [
  //         {
  //           itemName: "job 1 ",
  //           description: "description",
  //           price: 10,
  //           _id: "643696f225039600c5b7122e",
  //         },
  //       ],
  //       freelancer: {
  //         _id: "63e104aa8bba2cb3f754d7db",
  //         firstName: "Heba",
  //         lastName: "SKHAIL",
  //       },
  //       invoiceNo: "INV-396",
  //       status: "pending_verification",
  //     },
  //     type: "invoice",
  //     updatedAt: "2023-04-12T11:33:06.416Z",
  //   },
  //   {
  //     _id: "643696b425039600c5b7121b",
  //     invoice: {
  //       client: {
  //         _id: "643696b325039600c5b71210",
  //         fullName: "mohammed naji",
  //         email: "Mohammed@gmail.com",
  //         address: {
  //           country: "Palestine",
  //         },
  //       },
  //       currency: "USD",
  //       revenue: 0,
  //       fixed: [
  //         {
  //           itemName: "taymaa job",
  //           description: "test invoice",
  //           price: 1000,
  //           _id: "643696b325039600c5b71215",
  //         },
  //         {
  //           itemName: "test 2 job",
  //           description: "test invoice",
  //           price: 300,
  //           _id: "643696b325039600c5b71216",
  //         },
  //         {
  //           itemName: "test 2 job",
  //           description: "test invoice",
  //           price: 100,
  //           _id: "643696b325039600c5b71217",
  //         },
  //       ],
  //       freelancer: {
  //         _id: "63e104aa8bba2cb3f754d7db",
  //         firstName: "Heba",
  //         lastName: "SKHAIL",
  //       },
  //       invoiceNo: "INV-395",
  //       status: "pending_verification",
  //     },
  //     type: "invoice",
  //     updatedAt: "2023-04-12T11:32:04.170Z",
  //   },
  //   {
  //     _id: "6436950225039600c5b711a2",
  //     invoice: {
  //       client: {
  //         _id: "636bbb547574ca054f48b8fa",
  //         mobile: "+970525566968",
  //         email: "mohammed@gmail.com",
  //         address: {
  //           country: "Andorra (AD)",
  //         },
  //       },
  //       currency: "SAR",
  //       revenue: 0,
  //       fixed: [
  //         {
  //           itemName: "job 1 ",
  //           description: "description",
  //           price: 10,
  //           _id: "6436950125039600c5b7119e",
  //         },
  //       ],
  //       freelancer: {
  //         _id: "63e104aa8bba2cb3f754d7db",
  //         firstName: "Heba",
  //         lastName: "SKHAIL",
  //       },
  //       invoiceNo: "INV-393",
  //       status: "pending_verification",
  //     },
  //     type: "invoice",
  //     updatedAt: "2023-04-12T11:24:50.211Z",
  //   },
  //   {
  //     _id: "6436933725039600c5b7117d",
  //     invoice: {
  //       client: {
  //         _id: "6436933625039600c5b71171",
  //         fullName: "mohammed naji",
  //         email: "Mohammed@gmail.com",
  //         address: {
  //           country: "Palestine",
  //         },
  //       },
  //       currency: "USD",
  //       revenue: 0,
  //       fixed: [
  //         {
  //           itemName: "taymaa job",
  //           description: "test invoice",
  //           price: 1000,
  //           _id: "6436933725039600c5b71176",
  //         },
  //         {
  //           itemName: "test 2 job",
  //           description: "test invoice",
  //           price: 300,
  //           _id: "6436933725039600c5b71177",
  //         },
  //         {
  //           itemName: "test 2 job",
  //           description: "test invoice",
  //           price: 100,
  //           _id: "6436933725039600c5b71178",
  //         },
  //         {
  //           itemName: "test 2 job",
  //           description: "test invoice",
  //           price: 200,
  //           _id: "6436933725039600c5b71179",
  //         },
  //       ],
  //       freelancer: {
  //         _id: "63e104aa8bba2cb3f754d7db",
  //         firstName: "Heba",
  //         lastName: "SKHAIL",
  //       },
  //       invoiceNo: "INV-392",
  //       status: "pending_verification",
  //     },
  //     type: "invoice",
  //     updatedAt: "2023-04-12T11:17:11.510Z",
  //   },
  //   {
  //     _id: "6436932d50a9450b333153bb",
  //     invoice: {
  //       client: {
  //         _id: "63e104aa8bba2cb3f754d7db",
  //         mobile: "+970597039224",
  //         email: "hebaskhail@gmail.com",
  //         address: {
  //           country: "Palestine",
  //         },
  //       },
  //       currency: "USD",
  //       revenue: 0,
  //       fixed: [
  //         {
  //           itemName: "UI/UX Design for Noon Website",
  //           description: "UI/UX Design for Noon Website",
  //           price: 200,
  //           _id: "6436932d50a9450b333153b5",
  //         },
  //         {
  //           itemName: "Marketing for small bussiness application",
  //           description: "Marketing for small bussiness applicatio",
  //           price: 200,
  //           _id: "6436932d50a9450b333153b6",
  //         },
  //         {
  //           itemName: "React Native Mobile App Development",
  //           description: "React Native Mobile App Development",
  //           price: 500,
  //           _id: "6436932d50a9450b333153b7",
  //         },
  //       ],
  //       freelancer: {
  //         _id: "63e104aa8bba2cb3f754d7db",
  //         firstName: "Heba",
  //         lastName: "SKHAIL",
  //       },
  //       invoiceNo: "INV-391",
  //       status: "pending_verification",
  //     },
  //     type: "invoice",
  //     updatedAt: "2023-04-12T11:17:01.710Z",
  //   },
  //   {
  //     _id: "643692ef25039600c5b71161",
  //     invoice: {
  //       client: {
  //         _id: "636bbb547574ca054f48b8fa",
  //         mobile: "+970525566968",
  //         email: "mohammed@gmail.com",
  //         address: {
  //           country: "Algeria (DZ)",
  //         },
  //       },
  //       currency: "EGP",
  //       revenue: 0,
  //       fixed: [
  //         {
  //           itemName: "job title1",
  //           description: "description description",
  //           price: 10,
  //           _id: "643692ef25039600c5b7115b",
  //         },
  //         {
  //           itemName: "job title2",
  //           description: "descriptions description",
  //           price: 30,
  //           _id: "643692ef25039600c5b7115c",
  //         },
  //         {
  //           itemName: "job title3",
  //           description: "description",
  //           price: 20,
  //           _id: "643692ef25039600c5b7115d",
  //         },
  //       ],
  //       freelancer: {
  //         _id: "63e104aa8bba2cb3f754d7db",
  //         firstName: "Heba",
  //         lastName: "SKHAIL",
  //       },
  //       invoiceNo: "INV-390",
  //       status: "pending_verification",
  //     },
  //     type: "invoice",
  //     updatedAt: "2023-04-12T11:15:59.483Z",
  //   },
  // ];

  const {
    trigger: getTransactionData,
    data: TransactionData,
    isMutating,
  } = useSWRMutationHook(
    API_SERVICES_URLS.CLIENT.INVOICE_LIST + `?${urlParams.toString()}`,
    "GET"
  );
  console.log(
    API_SERVICES_URLS.CLIENT.INVOICE_LIST + `?${urlParams.toString()}`,
    "<==="
  );

  useEffect(() => {
    getTransactionData();
  }, [param]);

  console.log("TransactionData", TransactionData);

  const paginationSettings = usePagination(0, 4, 5);

  const tempData = TransactionData?.data?.transactions;
  const tabs = ["all", "invoices", "links"];

  return (
    <div className="flex flex-col gap-4">
      <h2>Table dierentdi table</h2>
      <TableTools
        onSearch={(search) => handleChangeUrlParams("search", search)}
      >
        asd
      </TableTools>
      <Table
        className="w-[800px] "
        tabs={tabs}
        headers={[["name", "date"], "amount", "client", "status"]}
        onSort={(name) => handleChangeUrlParams("sort", name)}
        onChangeTab={(index) => handleChangeUrlParams("type", tabs[index])}
        downSide={
          <Pagination
            {...paginationSettings}
            getString={(start, total) => `Page ${start} / ${total} `}
          />
        }
      >
        {isMutating ? (
          "loading"
        ) : (
          <>
            {tempData?.map((row) => {
              // hover:bg-[#FAFCFF]
              return (
                <tr
                  className="w-full text-black transition-colors border-b cursor-pointer border-gray hover:bg-gray-light "
                  onClick={() => console.log(row)}
                >
                  <td>
                    <div className="flex flex-col px-4 py-4 ">
                      <h3 className="capitalize">
                        {row?.invoice?.fixed[0]?.itemName}
                      </h3>

                      <div className="flex gap-2 pt-1 pb-2">
                        <small className="font-semibold text-gray-600">
                          Today
                        </small>
                        <small className="font-normal text-gray-500">
                          PayPal
                        </small>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="flex flex-col px-4 py-4 ">
                      1000 {row?.invoice?.currency}
                    </div>
                  </td>
                  <td className="text-gray-500 ">
                    {row?.invoice?.client?.fullName || "-"}
                  </td>
                  <td>
                    <div className="flex flex-col px-4 py-4 ">
                      <Status status={row?.invoice?.status} />
                    </div>
                  </td>
                </tr>
              );
            })}
          </>
        )}
      </Table>
      <button onClick={() => paginationSettings.goTo(7)}>go to 7</button>
    </div>
  );
};

export default testTable;

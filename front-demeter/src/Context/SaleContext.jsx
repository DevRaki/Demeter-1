import { createContext, useState, useContext, useEffect } from 'react'
import { Createsale, CreatesaleDetail, GetDetails, UpdSale, getSale, pay, GetoneSale, CreateManysaleDetails } from '../api/sale.request'; 
import React from 'react';
export const SaleContext = createContext();

export const useSaleContext = () => {
    const context = useContext(SaleContext);
    if (!context) {
        throw new Error("El useSale debe usarse dentro de SaleProvider")
    }
    return context;
}

export const SaleProvider = ({ children }) => {

    const [newDetails, setnewDetails] = useState([]);
    const [Sale, setSale] = useState([]);
    const [Sales, setSales] = useState ([]);
    const [details, setDetails] = useState([]);
    const [total, setTotal] = useState([]);


    const Create = async () => {
        try {
            const res = await Createsale({
                Total : total,
                SubTotal : total
            });
            setSale(res.data)
        } catch (error) {
            console.log(error)
        }
    }
    const getOne = async (ID_Sale) => {
        try {
            const res = await GetoneSale(ID_Sale);
            setSale(res.data)
        } catch (error) {
            console.log(error)
        }
    }
    const CreateDetail = async (data) => {
        try {
            const res = await CreatesaleDetail(data);
            return (res)
        } catch (error) {
            console.log(error)
        }
    }

    const createManyDetails = async (data) => {
        try {
            const res = await CreateManysaleDetails(data);
            setnewDetails([])
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }

    }
    const getDetailsSale = async (id) => {
        try {
            const res = await GetDetails(id);
            setDetails(res.data)
        } catch (error) {
            console.log("no funciona")
        }

    }

    const fetchGain = async (totalMoney) =>{
        setTotal(totalMoney)
    }

    const Count = async (data) => {
        try {
            
            const res = await UpdSale(data);
        } catch (error) {
            console.log("no funciona el actualizar")
        }

    }

    const fetchSales = async() =>{

        try {
            const res = await getSale();
            setSales(res.data)
        } catch (error) {
            console.log(error)
        }

    }

    const paySale = async(data) =>{
        try {
           const res =await pay({"ID_Sale": data});
           console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    const addnewDetail = (detail) => {
       
        setnewDetails((prevList) => [...prevList, detail]);
      };

  


    return (
        <SaleContext.Provider
            value={{
                Sale,
                Sales,
                details,
                total,
                newDetails,
                addnewDetail,
                getOne,
                paySale,
                fetchSales,
                fetchGain,
                Create, 
                CreateDetail,
                createManyDetails,
                getDetailsSale,
                Count    
            }}
        >
            {children}
        </SaleContext.Provider>
    );
};
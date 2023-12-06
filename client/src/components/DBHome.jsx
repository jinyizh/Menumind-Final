import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../api'
import { setAllProducts } from '../context/actions/productActions'
import { CChart } from "@coreui/react-chartjs"

const DBHome = () => {
  const products = useSelector((state) => state.products)
  const dispatch = useDispatch()

  // "bakery",
  // "beverage",
  // "condiment",
  // "deli",
  // "diary",
  // "meat",
  // "produce",

  const bakery = products?.filter((item) => item.product_category === "bakery")
  const beverage = products?.filter((item) => item.product_category === "beverage")
  const condiment = products?.filter((item) => item.product_category === "condiment")
  const deli = products?.filter((item) => item.product_category === "deli")
  const diary = products?.filter((item) => item.product_category === "diary")
  const meat = products?.filter((item) => item.product_category === "meat")
  const produce = products?.filter((item) => item.product_category === "produce")


  useEffect(() => {
    if (!products) {
      getAllProducts().then((data) => {
        dispatch(setAllProducts(data))
      })
    }
  }, [])

  return (
    <div className='flex items-center justify-center flex-col pt-6 w-full h-full'>
      <div className='grid w-full grid-cols-1 md:grid-cols-2 gap-4 h-full'>
        <div className='flex items-center justify-center'>
          <div className='w-340 md:w-508'>
            <CChart
            type='bar'
            data={{
              labels: [
                "bakery",
                "beverage",
                "condiment",
                "deli",
                "diary",
                "meat",
                "produce",
              ],
              datasets: [
                {
                  label: "Quantity",
                  backgroundColor: "#f87979",
                  data: [
                    bakery?.length,
                    beverage?.length,
                    condiment?.length,
                    deli?.length,
                    diary?.length,
                    meat?.length,
                    produce?.length,
                  ],
                },
              ],
            }}
            labels="months"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DBHome
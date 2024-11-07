import React, { useState } from "react";
import { Button, Modal } from 'antd';
import axios from "axios";

function PaymentModal() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const showLoading = () => {
    setOpen(true);
    setLoading(true); 

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const paypalPayment = async () => {
    try {
      const response = await axios.get("https://ed-tech-eight.vercel.app/paypal-payment");
      const approvalUrl = response.data.approvalUrl;
      window.location.href = approvalUrl;
    } catch (err) {
      console.log('payment error', err);
    }
  };

  return (
    <>
      <Button type="primary" onClick={showLoading}>
        Purchase
      </Button>
      <Modal
        title={<p>Choose payment method</p>}
        footer={null}
        loading={loading}
        open={open}
        onCancel={() => setOpen(false)}
      >
        <div className="flex w-full items-center justify-center gap-4 p-7">
          <div className="border-2 outline-indigo-800 flex items-center cursor-pointer" onClick={paypalPayment}>
            <img src="/Paypal.png" className="w-12 h-10" alt="" />
          </div>
          <div className="border-2 flex items-center cursor-pointer">
            <img src="/stripe.png" className="w-12 h-10" alt="" />
          </div>
        </div>
      </Modal>
    </>
  );
}

export default PaymentModal;
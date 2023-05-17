const CustomerComponent = () => {
  return (
    <>
      <h1>this is for customer type component</h1>
    </>
  )
}

const SupplierComponent = () => {
  return (
    <>
      <h1>this is for supplier type component</h1>
    </>
  )
}

const AssistantComponent = () => {
  return (
    <>
      <h1>this is for assistant type component</h1>
    </>
  )
}

const SupportComponent = () => {
  return (
    <>
      <h1>this is for customer type component</h1>
    </>
  )
}

// =================================================================
import React, { useState } from 'react';
import dynamic from 'next/dynamic';

const Home () => {
  const userType = 'customer';

  const dynamicLoad = {
    customer: dynamic(() => import('component/CustomerComponent')),
    supplier: dynamic(() => import('component/SupplierComponent')),
    assistant: dynamic(() => import('component/AssistantComponent')),
    support: dynamic(() => import('component/SupportComponent'))
  };
  
  return (
    <>
      <span>dynamic component userType</span>
      {dynamicLoad[userType]}
    </>
  )
}

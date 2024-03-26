import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Transaction from "./pages/Transaction/Transaction";
import AddConnection from "./pages/AddConnection/AddConnection";
import Expenses from "./pages/Expenses/Expenses";
import PocketExpense from "./pages/PocketExpense/PocketExpense";
import Dividend from "./pages/Dividend/Dividend";
import DividendPayment from "./pages/DividendPayment/DividendPayment";
import Payroll from "./pages/Payroll/Payroll";
import ReferFriends from "./pages/ReferFriends/ReferFriends";
import Taxes from "./pages/Taxes/Taxes";
import MarketPerks from "./pages/MarketPerks/MarketPerks";
import Purchases from "./pages/Purchases/Purchases";
import Sales from "./pages/Sales/Sales";
import Reports from "./pages/Reports/Reports";
import Settings from "./pages/Settings/Settings";
import Login from "./pages/Login/Login";
import TwoFactor from "./pages/Login/TwoFactor";
import { LAMT_API } from "./api";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import ForgetPassword from "./pages/ForgetPassword/ForgetPassword";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import ClientLogin from "./pages/ClientLogiin/ClientLogin";
import RegisterType from "./pages/Signup/RegisterType";
import Register from "./pages/Signup/Register";
import MultiStep from "./pages/Signup/MultiStep";
import Plans from "./pages/Plans/Plans";
import AddSalesInvoice from "./pages/Sales/AddSalesInvoice";
import AddSuplierInvoice from "./pages/Purchases/AddSuplierInvoice";
import AddClient from "./pages/Sales/AddClient";
import AddClientForm from "./pages/Sales/AddClientForm";
import AddProduct from "./pages/Sales/AddProduct";
import AddSuplier from "./pages/Purchases/AddSuplier";
import SalesDetail from "./pages/Sales/SalesDetail";
import ProductDetail from "./pages/Sales/ProductDetail";
import ProfitLoss from "./pages/Reports/ProfitLoss";
import SalesInvoice from "./pages/Sales/SalesInvoice";
import ProductCategory from "./pages/Sales/ProductCategory";
import UpdateDeleteClient from "./pages/Sales/UpdateDeleteClient";
import UpdateDeleteProduct from "./pages/Sales/UpdateDeleteProduct";
import AddUser from "./pages/Users/AddUsers";
import UsersDetail from "./pages/Users/UsersDetail";
import UpdateDeletePurchases from "./pages/Purchases/UpdateDeletePurchases";
import AddPurchases from "./pages/Purchases/addPurchase";
import SalesDetailMain from "./pages/Sales/SalesDetailmain";
import PurchaseSalesDetail from "./pages/Purchases/SalesDetail";
import Director from "./pages/DirectorSetting/Director";
import Invoicing from "./pages/InvoicingSetting/Invoicing";
import Vat from "./pages/VatSetting/Vat";
import Openning from "./pages/OpenningBalances/Openning";
import Advaccount from "./pages/AdvancedAccount/Advaccount";
import ManualJournal from "./pages/ManualJournal/ManualJournal";
import ManageSubscriptions from "./pages/ManageSub/ManageSubscriptions";
import BusinessSettings from "./pages/Business/BusinessSettings";
import Category from "./pages/Category/Category";
import Invoice from "./pages/Invoice/Invoice";
import VerifyPassword from "./pages/ForgetPassword/verifyPassword";
import DividendAb from "./pages/DividendAb/DividendAb";
import Moneyow from "./pages/Moneyowed/Moneyow";
import MBO from "./pages/MoneyBusinessOwed/MBO";
import PersonaltacR from "./pages/PersonaltaxR/PersonaltacR";
import AdvanceAccounting from "./pages/AdvancedAccount/AdvanceAccounting";
import ProfitLossStatement from "./pages/Reports/ProfitLossStatement";
import BalanceSheet from "./pages/Reports/BalanceSheet";
import AddJournal from "./pages/AddJournal/AddJournal";
import PricingPlan from "./pages/Plans/PricingPlan";
import StepTwo from "./pages/Signup/MultiStep/StepTwo";
import StepOne from "./pages/Signup/MultiStep/StepOne";
import StepThree from "./pages/Signup/MultiStep/StepThree";
import StepFour from "./pages/Signup/MultiStep/StepFour";
import StepFive from "./pages/Signup/MultiStep/StepFive";
import StepSix from "./pages/Signup/MultiStep/StepSix";
import StepSeven from "./pages/Signup/MultiStep/StepSeven";
import StepEight from './pages/Signup/MultiStep/StepEight'
import StepNine from './pages/Signup/MultiStep/StepNine'
import StepTen from './pages/Signup/MultiStep/StepTen'
import ClientSignup from "./pages/ClientLogiin/ClientSignup";
import CheckoutForm from "./pages/Plans/PaymentForm";
import { loadStripe } from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import PricingPlanNew from "./pages/Plans/PricingPlanNew";
function App() {
  const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");
  const options = {
    mode: "payment",
    amount: 1099,
    currency: "usd",
    // Fully customizable with appearance API.
    appearance: {
      /*...*/
    },
  };
  useEffect(() => {
    LAMT_API.init();
  }, []);
  return (
    <> 
      <div className="app">
        <BrowserRouter>
        <Elements stripe={stripePromise} options={options}>
        <Routes>
          <Route path="/payment/method" element={<CheckoutForm />}/>
          <Route path='/pricing/plan' element={<PricingPlanNew /> } />
            <Route index element={<ProtectedRoute children={<Dashboard />} />} />
            <Route path='/admin/login' element={<ProtectedRoute children={<Login />} />} />
            <Route path='/login' element={<ProtectedRoute children={<ClientLogin />} />} />
            <Route path='/forget-password' element={<ProtectedRoute children={<ForgetPassword />} />} />
            <Route path='/reset-password/:email' element={<ResetPassword /> }/>
            <Route path='/signup-type' element={<ProtectedRoute children={<RegisterType />} />} />
            <Route path='/signup' element={<ProtectedRoute children={<Register />} />} />
            <Route path='/plans' element={<ProtectedRoute children={<Plans />} />} />  
            <Route path='/user/signup' element={<ClientSignup />} />
            <Route path='/verify-password/:email' element={<VerifyPassword />}/>   
            <Route path='/signup/search' element={<ProtectedRoute children={<StepOne />} />} />
            <Route path='/signup/directors' element={<ProtectedRoute children={<StepTwo />} />} />
            <Route path='/signup/number' element={<ProtectedRoute children={<StepThree />} />} />
            <Route path='/signup/vad/register' element={<ProtectedRoute children={<StepFour />} />} />
            <Route path='/signup/monthly/revenue' element={<ProtectedRoute children={<StepFive />} />} />
            <Route path='/signup/frelance/detail' element={<ProtectedRoute children={<StepSix />} />} />
            <Route path='/signup/freelancer/no' element={<ProtectedRoute children={<StepSeven />} />} />
            <Route path='/signup/freelancer/date' element={<ProtectedRoute children={<StepEight />} />} />
            <Route path='/signup/freelancer/assessment' element={<ProtectedRoute children={<StepNine />} />} />
            <Route path='/signup/freelancer/vat' element={<ProtectedRoute children={<StepTen />} />} />
            <Route path='/two-factor' element={<ProtectedRoute children={<TwoFactor />} />} />
            <Route path='/transaction' element={<ProtectedRoute children={<Transaction />} />} />
            <Route path='/add-connection' element={<ProtectedRoute children={<AddConnection />} />} />
            <Route path='/expenses' element={<ProtectedRoute children={<Expenses />} />} />
            <Route path='/add-expense/:id' element={<ProtectedRoute children={<PocketExpense />} />} />
            <Route path='/dividend' element={<ProtectedRoute children={<Dividend />} />} />
            <Route path='/pay-dividend' element={<ProtectedRoute children={<DividendPayment />} />} />
            <Route path='/payroll' element={<ProtectedRoute children={<Payroll />} />} />
            <Route path='/refer-friends' element={<ProtectedRoute children={<ReferFriends />} />} />
            <Route path='/taxes' element={<ProtectedRoute children={<Taxes />} />} />
            <Route path='/market-perks' element={<ProtectedRoute children={<MarketPerks />} />} />
            <Route path='/purchases' element={<ProtectedRoute children={<Purchases />} />} />
            <Route path='/add-purchase' element={<ProtectedRoute children={<AddPurchases />} />} />
            <Route path='/add-suplier-invoice' element={<ProtectedRoute children={<AddSuplierInvoice />} />} />
            <Route path='/add-suplier' element={<ProtectedRoute children={<AddSuplier />} />} />
            <Route path='/update-delete-supplier/:id' element={<ProtectedRoute children={<UpdateDeletePurchases />} />} />
            <Route path='/sales' element={<ProtectedRoute children={<Sales />} />} />
            <Route path='/sales/:id' element={<ProtectedRoute children={<SalesDetail />} />} />
            <Route path='/sales/main/:id' element={<ProtectedRoute children={<SalesDetailMain />} />} />
            <Route path='/sales/product' element={<ProtectedRoute children={<ProductDetail />} />} />
            <Route path='/sales/product/:id' element={<ProtectedRoute children={<UpdateDeleteProduct />} />} />
            <Route path='/sales-invoice' element={<ProtectedRoute children={<SalesInvoice />} />} />
            <Route path='/product-category' element={<ProtectedRoute children={<ProductCategory />} />} />
            <Route path='/add-sales-invoice' element={<ProtectedRoute children={<AddSalesInvoice />} />} />
            <Route path='/add-client-sales' element={<ProtectedRoute children={<AddClient />} />} />
            <Route path='/update-delete-client/:id' element={<ProtectedRoute children={<UpdateDeleteClient />} />} />
            <Route path='/update-delete-product/:id' element={<ProtectedRoute children={<UpdateDeleteProduct />} />} />
            <Route path='/add-client' element={<ProtectedRoute children={<AddClientForm />} />} />
            <Route path='/add-new-products' element={<ProtectedRoute children={<AddProduct />} />} />
            <Route path='/reports' element={<ProtectedRoute children={<Reports />} />} />
            <Route path='/profitloss' element={<ProtectedRoute children={<ProfitLoss />} />} />
            <Route path='/settings' element={<ProtectedRoute children={<Settings />} />} />
            <Route path='/adduser' element={<ProtectedRoute children={<AddUser />} />} />
            <Route path='/users' element={<ProtectedRoute children={<UsersDetail/>} />} />
            <Route path='/purchases/invoice/:id' element={<ProtectedRoute children={<PurchaseSalesDetail/>} />} />
            <Route path='/director-setting' element={<ProtectedRoute children={<Director/>} />} />
            <Route path='/invoicing-setting' element={<ProtectedRoute children={<Invoicing/>} />} />
            <Route path='/vat-setting' element={<ProtectedRoute children={<Vat/>} />} />
            <Route path='/opening-balance' element={<ProtectedRoute children={<Openning/>} />} />
            <Route path='/advanced-account' element={<ProtectedRoute children={<Advaccount/>} />} />
            <Route path='/manual-journal' element={<ProtectedRoute children={<ManualJournal/>} />} />
            <Route path='/manage-Sub' element={<ProtectedRoute children={<ManageSubscriptions/>} />} />
            <Route path='/business-setting' element={<ProtectedRoute children={<BusinessSettings/>} />} />
            <Route path='/category' element={<ProtectedRoute children={<Category/>} />} />
            <Route path='/invoices' element={<ProtectedRoute children={<Invoice/>} />} />
            <Route path='/dividend-ab' element={<ProtectedRoute children={<DividendAb/>} />} />
            <Route path='/money-owed' element={<ProtectedRoute children={<Moneyow />} />} />
            <Route path='/money-business-owed' element={<ProtectedRoute children={<MBO />} />} />
            <Route path='/personal-tax' element={<ProtectedRoute children={<PersonaltacR />} />} />
            {/* <Route path='/pricing-plans' element={<ProtectedRoute children={<Pricingplan />} />} /> */}
            <Route path='/pricingPlan' element={<ProtectedRoute children={<PricingPlan />} />} />
            <Route path='/advance-accounting' element={<ProtectedRoute children={<AdvanceAccounting />} />} />
            <Route path='/profitlosspage' element={<ProtectedRoute children={<ProfitLossStatement />} />} />
            <Route path='/balancesheet' element={<ProtectedRoute children={<BalanceSheet />} />} />
            <Route path='/addjournal' element={<ProtectedRoute children={<AddJournal />} />} />
        </Routes>
        </Elements>
       
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

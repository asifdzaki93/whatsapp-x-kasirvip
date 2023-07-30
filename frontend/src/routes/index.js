import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import LoggedInLayout from "../layout";
import Dashboard from "../pages/Dashboard/";
import Tickets from "../pages/Tickets/";
import Signup from "../pages/Signup/";
import Login from "../pages/Login/";
import Connections from "../pages/Connections/";
import Settings from "../pages/Settings/";
import Users from "../pages/Users";

import KasirVip from "../pages/KasirVip";
import Penjualan from "../pages/Penjualan";
import Test from "../pages/Test";
import Schedules from "../pages/Schedules/";
import SendMassMessage from "../pages/SendMassMessage";
import SettingMessage from "../pages/SettingMessage";
import ShippingReport from "../pages/ShippingReport";
import Tags from "../pages/Tags/";


import Contacts from "../pages/Contacts/";
import QuickAnswers from "../pages/QuickAnswers/";
import Queues from "../pages/Queues/";
import { AuthProvider } from "../context/Auth/AuthContext";
import { WhatsAppsProvider } from "../context/WhatsApp/WhatsAppsContext";
import Route from "./Route";

const Routes = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <WhatsAppsProvider>
            <LoggedInLayout>
              <Route exact path="/" component={Dashboard} isPrivate />
              <Route
                exact
                path="/tickets/:ticketId?"
                component={Tickets}
                isPrivate
              />
              <Route
                exact
                path="/connections"
                component={Connections}
                isPrivate
              />
              <Route exact path="/contacts" component={Contacts} isPrivate />
              <Route exact path="/users" component={Users} isPrivate />
              <Route exact path="/KasirVip" component={KasirVip} isPrivate />
              <Route exact path="/Penjualan" component={Penjualan} isPrivate />
              <Route exact path="/Test" component={Test} isPrivate />
              <Route exact path="/tags" component={Tags} isPrivate />
              <Route exact path="/schedules" component={Schedules} isPrivate />
              <Route exact path="/BulkMessage" component={SendMassMessage} isPrivate />
              <Route exact path="/ShippingReport" component={ShippingReport} isPrivate />
              <Route exact path="/SettingsMessage" component={SettingMessage} isPrivate />

              <Route
                exact
                path="/quickAnswers"
                component={QuickAnswers}
                isPrivate
              />
              <Route exact path="/Settings" component={Settings} isPrivate />
              <Route exact path="/Queues" component={Queues} isPrivate />
            </LoggedInLayout>
          </WhatsAppsProvider>
        </Switch>
        <ToastContainer autoClose={3000} />
      </AuthProvider>
    </BrowserRouter>
  );
};

export default Routes;

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './forms/main/main.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactDetailsComponent } from './forms/contact-details/contact-details.component';
import { MessageComponent } from './forms/message/message.component';
import { ClientInfoComponent } from './forms/application-form/client-info/client-info.component';
import { OtpAuthenticationComponent } from './forms/application-form/otp-authentication/otp-authentication.component';
import { CompanyDetailsComponent } from './forms/application-form/company-details/company-details.component';
import { PartnerDetailsComponent } from './forms/application-form/partner-details/partner-details.component';
import { BusinessDetailsComponent } from './forms/application-form/business-details/business-details.component';
import { AboutBusinessComponent } from './forms/application-form/about-business/about-business.component';
import { AboutTransactionsComponent } from './forms/application-form/about-transactions/about-transactions.component';
import { BusinessBankingServicesComponent } from './forms/application-form/business-banking-services/business-banking-services.component';
import { UploadDocumentComponent } from './forms/application-form/upload-document/upload-document.component';
import { UploadNricComponent } from './forms/application-form/upload-nric/upload-nric.component';
import { UploadSignatureComponent } from './forms/application-form/upload-signature/upload-signature.component';

const routes: Routes = [
  { path: '', component: MainComponent, pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'appointment', component: ContactDetailsComponent },
  { path: 'message', component: MessageComponent },
  { path: 'client-info', component: ClientInfoComponent },
  { path: 'otp-authentication', component: OtpAuthenticationComponent },
  { path: 'company-details', component: CompanyDetailsComponent },
  { path: 'partner-details', component: PartnerDetailsComponent },
  { path: 'business-details', component: BusinessDetailsComponent },
  { path: 'about-business', component: AboutBusinessComponent },
  { path: 'about-transactions', component: AboutTransactionsComponent },
  { path: 'business-banking-services', component: BusinessBankingServicesComponent },
  { path: 'upload-document', component: UploadDocumentComponent },
  { path: 'upload-nric', component: UploadNricComponent },
  { path: 'upload-signature', component: UploadSignatureComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

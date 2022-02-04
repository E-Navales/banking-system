import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './forms/main/main.component';
import { ContactDetailsComponent } from './forms/contact-details/contact-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { HomeComponent } from './home/home.component';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatGridListModule } from '@angular/material/grid-list';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ContactDetailsComponent,
    MessageComponent,
    ClientInfoComponent,
    OtpAuthenticationComponent,
    CompanyDetailsComponent,
    PartnerDetailsComponent,
    BusinessDetailsComponent,
    AboutBusinessComponent,
    AboutTransactionsComponent,
    BusinessBankingServicesComponent,
    UploadDocumentComponent,
    UploadNricComponent,
    UploadSignatureComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatDialogModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatGridListModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

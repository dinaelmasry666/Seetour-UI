import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ApiPaths } from '../Enums/api-paths';
import { AdminPostStatus } from '../Interfaces/admin-post-status';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  urlBase: string = environment.baseUrl;

  constructor(private readonly client : HttpClient,
    private route: ActivatedRoute) {}

  GetTourRequests() {

    let url = this.urlBase+ApiPaths.admin+ApiPaths.adminTour+ApiPaths.adminTourRequest;

    return this.client.get(url);
  }

  PostEditRequest(request: AdminPostStatus) {
    let url = this.urlBase+ApiPaths.admin+ApiPaths.adminTour+ApiPaths.adminTourRequest;

    return this.client.post(url, request);
  }

  GetApplicants() {
    let url = this.urlBase+ApiPaths.admin+ApiPaths.adminTourguide+ApiPaths.adminTGApplicant;
    return this.client.get(url);
  }
}

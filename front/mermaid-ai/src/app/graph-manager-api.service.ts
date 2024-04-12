import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MermaidGraph } from './mermaid-graph';

@Injectable({
  providedIn: 'root'
})
export class GraphManagerApiService {

  constructor(private http: HttpClient) { }

  getGraph(graphPrompt: MermaidGraph): Observable<MermaidGraph> {
    return this.http.post<MermaidGraph>('/api/v1/generateGraph', graphPrompt);
  }
}

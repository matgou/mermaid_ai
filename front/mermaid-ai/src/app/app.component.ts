import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as mermaid from 'mermaid';
import { CommonModule } from '@angular/common'
import { GraphManagerApiService } from './graph-manager-api.service'
import { DomSanitizer } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MermaidGraph } from './mermaid-graph';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mermaid-ai';
  display = "graph";
  graph: MermaidGraph = new MermaidGraph();
  history: MermaidGraph[] = []
  public svgGraph: any;
  config = {
    startOnLoad: true,
    flowchart: {
      useMaxWidth: true,
      htmlLabels: true,
      curve: "cardinal",
    },
    securityLevel: "loose"
  };

  constructor(
    private sanitizer: DomSanitizer,
    private graphManagerApiService: GraphManagerApiService,
  ) { }

  ngAfterViewInit() {
    mermaid.default.initialize(this.config);
    this.renderGraph();
  }

  renderGraph() {
    mermaid.default.render("graphDiv", this.graph.graphDefinition).then((svgCode) => {
      this.svgGraph = this.sanitizer.bypassSecurityTrustHtml(svgCode.svg);
    });
  }

  generateMindmap() {
    this.display = "loading"
    this.graphManagerApiService.getGraph(this.graph).subscribe((graph) => {
      console.log(graph.graphDefinition);
      this.graph = graph;
      let history: MermaidGraph = new MermaidGraph();
      history.graphPrompt = graph.graphPrompt;
      history.graphPromptHistory = graph.graphPromptHistory;
      history.graphDefinition = graph.graphDefinition;

      this.history.push(history);
      this.renderGraph();
      this.display = "graph"
    });
  }
  restoreGraph(oldGraph: MermaidGraph) {
    this.display = "loading"
    this.graph = oldGraph;
    this.renderGraph();
    this.display = "graph"
  }
}
import{$a as lt,E as J,Ga as K,H as st,Ia as nt,J as vt,Qa as rt,_a as at,b as kt,c as bt,db as ct,fb as ot,gb as ht,hb as ut,ib as yt,jb as pt,kb as ft,l as it,lb as gt,nb as Q,rb as dt}from"./chunk-4U6KPOB4.js";import{g as H}from"./chunk-RVFOIZLJ.js";var jt=H(kt(),1),Gt=H(bt(),1),Mt=H(vt(),1);var X=function(){var i=function(d,t,e,s){for(e=e||{},s=d.length;s--;e[d[s]]=t);return e},_=[1,3],F=[1,4],p=[1,5],g=[1,6],S=[1,10,12,14,16,18,19,20,21,22],N=[2,4],D=[1,5,10,12,14,16,18,19,20,21,22],o=[20,21,22],E=[2,7],m=[1,12],C=[1,13],O=[1,14],x=[1,15],P=[1,16],h=[1,17],$={trace:function(){},yy:{},symbols_:{error:2,start:3,eol:4,PIE:5,document:6,showData:7,line:8,statement:9,txt:10,value:11,title:12,title_value:13,acc_title:14,acc_title_value:15,acc_descr:16,acc_descr_value:17,acc_descr_multiline_value:18,section:19,NEWLINE:20,";":21,EOF:22,$accept:0,$end:1},terminals_:{2:"error",5:"PIE",7:"showData",10:"txt",11:"value",12:"title",13:"title_value",14:"acc_title",15:"acc_title_value",16:"acc_descr",17:"acc_descr_value",18:"acc_descr_multiline_value",19:"section",20:"NEWLINE",21:";",22:"EOF"},productions_:[0,[3,2],[3,2],[3,3],[6,0],[6,2],[8,2],[9,0],[9,2],[9,2],[9,2],[9,2],[9,1],[9,1],[4,1],[4,1],[4,1]],performAction:function(t,e,s,r,a,n,w){var u=n.length-1;switch(a){case 3:r.setShowData(!0);break;case 6:this.$=n[u-1];break;case 8:r.addSection(n[u-1],r.cleanupValue(n[u]));break;case 9:this.$=n[u].trim(),r.setDiagramTitle(this.$);break;case 10:this.$=n[u].trim(),r.setAccTitle(this.$);break;case 11:case 12:this.$=n[u].trim(),r.setAccDescription(this.$);break;case 13:r.addSection(n[u].substr(8)),this.$=n[u].substr(8);break}},table:[{3:1,4:2,5:_,20:F,21:p,22:g},{1:[3]},{3:7,4:2,5:_,20:F,21:p,22:g},i(S,N,{6:8,7:[1,9]}),i(D,[2,14]),i(D,[2,15]),i(D,[2,16]),{1:[2,1]},i(o,E,{8:10,9:11,1:[2,2],10:m,12:C,14:O,16:x,18:P,19:h}),i(S,N,{6:18}),i(S,[2,5]),{4:19,20:F,21:p,22:g},{11:[1,20]},{13:[1,21]},{15:[1,22]},{17:[1,23]},i(o,[2,12]),i(o,[2,13]),i(o,E,{8:10,9:11,1:[2,3],10:m,12:C,14:O,16:x,18:P,19:h}),i(S,[2,6]),i(o,[2,8]),i(o,[2,9]),i(o,[2,10]),i(o,[2,11])],defaultActions:{7:[2,1]},parseError:function(t,e){if(e.recoverable)this.trace(t);else{var s=new Error(t);throw s.hash=e,s}},parse:function(t){var e=this,s=[0],r=[],a=[null],n=[],w=this.table,u="",c=0,A=0,V=2,z=1,B=n.slice.call(arguments,1),l=Object.create(this.lexer),T={yy:{}};for(var U in this.yy)Object.prototype.hasOwnProperty.call(this.yy,U)&&(T.yy[U]=this.yy[U]);l.setInput(t,T.yy),T.yy.lexer=l,T.yy.parser=this,typeof l.yylloc>"u"&&(l.yylloc={});var Y=l.yylloc;n.push(Y);var mt=l.options&&l.options.ranges;typeof T.yy.parseError=="function"?this.parseError=T.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function xt(){var b;return b=r.pop()||l.lex()||z,typeof b!="number"&&(b instanceof Array&&(r=b,b=r.pop()),b=e.symbols_[b]||b),b}for(var y,I,f,q,L={},W,k,et,j;;){if(I=s[s.length-1],this.defaultActions[I]?f=this.defaultActions[I]:((y===null||typeof y>"u")&&(y=xt()),f=w[I]&&w[I][y]),typeof f>"u"||!f.length||!f[0]){var Z="";j=[];for(W in w[I])this.terminals_[W]&&W>V&&j.push("'"+this.terminals_[W]+"'");l.showPosition?Z="Parse error on line "+(c+1)+`:
`+l.showPosition()+`
Expecting `+j.join(", ")+", got '"+(this.terminals_[y]||y)+"'":Z="Parse error on line "+(c+1)+": Unexpected "+(y==z?"end of input":"'"+(this.terminals_[y]||y)+"'"),this.parseError(Z,{text:l.match,token:this.terminals_[y]||y,line:l.yylineno,loc:Y,expected:j})}if(f[0]instanceof Array&&f.length>1)throw new Error("Parse Error: multiple actions possible at state: "+I+", token: "+y);switch(f[0]){case 1:s.push(y),a.push(l.yytext),n.push(l.yylloc),s.push(f[1]),y=null,A=l.yyleng,u=l.yytext,c=l.yylineno,Y=l.yylloc;break;case 2:if(k=this.productions_[f[1]][1],L.$=a[a.length-k],L._$={first_line:n[n.length-(k||1)].first_line,last_line:n[n.length-1].last_line,first_column:n[n.length-(k||1)].first_column,last_column:n[n.length-1].last_column},mt&&(L._$.range=[n[n.length-(k||1)].range[0],n[n.length-1].range[1]]),q=this.performAction.apply(L,[u,A,c,T.yy,f[1],a,n].concat(B)),typeof q<"u")return q;k&&(s=s.slice(0,-1*k*2),a=a.slice(0,-1*k),n=n.slice(0,-1*k)),s.push(this.productions_[f[1]][0]),a.push(L.$),n.push(L._$),et=w[s[s.length-2]][s[s.length-1]],s.push(et);break;case 3:return!0}}return!0}},R=function(){var d={EOF:1,parseError:function(e,s){if(this.yy.parser)this.yy.parser.parseError(e,s);else throw new Error(e)},setInput:function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var t=this._input[0];this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t;var e=t.match(/(?:\r\n?|\n).*/g);return e?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},unput:function(t){var e=t.length,s=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var r=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),s.length-1&&(this.yylineno-=s.length-1);var a=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:s?(s.length===r.length?this.yylloc.first_column:0)+r[r.length-s.length].length-s[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[a[0],a[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},less:function(t){this.unput(this.match.slice(t))},pastInput:function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var t=this.pastInput(),e=new Array(t.length+1).join("-");return t+this.upcomingInput()+`
`+e+"^"},test_match:function(t,e){var s,r,a;if(this.options.backtrack_lexer&&(a={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(a.yylloc.range=this.yylloc.range.slice(0))),r=t[0].match(/(?:\r\n?|\n).*/g),r&&(this.yylineno+=r.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:r?r[r.length-1].length-r[r.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],s=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),s)return s;if(this._backtrack){for(var n in a)this[n]=a[n];return!1}return!1},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var t,e,s,r;this._more||(this.yytext="",this.match="");for(var a=this._currentRules(),n=0;n<a.length;n++)if(s=this._input.match(this.rules[a[n]]),s&&(!e||s[0].length>e[0].length)){if(e=s,r=n,this.options.backtrack_lexer){if(t=this.test_match(s,a[n]),t!==!1)return t;if(this._backtrack){e=!1;continue}else return!1}else if(!this.options.flex)break}return e?(t=this.test_match(e,a[r]),t!==!1?t:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var e=this.next();return e||this.lex()},begin:function(e){this.conditionStack.push(e)},popState:function(){var e=this.conditionStack.length-1;return e>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(e){return e=this.conditionStack.length-1-Math.abs(e||0),e>=0?this.conditionStack[e]:"INITIAL"},pushState:function(e){this.begin(e)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(e,s,r,a){switch(r){case 0:break;case 1:break;case 2:return 20;case 3:break;case 4:break;case 5:return this.begin("title"),12;case 6:return this.popState(),"title_value";case 7:return this.begin("acc_title"),14;case 8:return this.popState(),"acc_title_value";case 9:return this.begin("acc_descr"),16;case 10:return this.popState(),"acc_descr_value";case 11:this.begin("acc_descr_multiline");break;case 12:this.popState();break;case 13:return"acc_descr_multiline_value";case 14:this.begin("string");break;case 15:this.popState();break;case 16:return"txt";case 17:return 5;case 18:return 7;case 19:return"value";case 20:return 22}},rules:[/^(?:%%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n\r]+)/i,/^(?:%%[^\n]*)/i,/^(?:[\s]+)/i,/^(?:title\b)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:pie\b)/i,/^(?:showData\b)/i,/^(?::[\s]*[\d]+(?:\.[\d]+)?)/i,/^(?:$)/i],conditions:{acc_descr_multiline:{rules:[12,13],inclusive:!1},acc_descr:{rules:[10],inclusive:!1},acc_title:{rules:[8],inclusive:!1},title:{rules:[6],inclusive:!1},string:{rules:[15,16],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,7,9,11,14,17,18,19,20],inclusive:!0}}};return d}();$.lexer=R;function v(){this.yy={}}return v.prototype=$,$.Parser=v,new v}();X.parser=X;var St=X,_t=rt.pie,G={sections:{},showData:!1,config:_t},M=G.sections,tt=G.showData,Et=structuredClone(_t),$t=()=>structuredClone(Et),wt=()=>{M=structuredClone(G.sections),tt=G.showData,ot()},At=(i,_)=>{i=nt(i,Q()),M[i]===void 0&&(M[i]=_,K.debug(`added new section: ${i}, with value: ${_}`))},Tt=()=>M,It=i=>(i.substring(0,1)===":"&&(i=i.substring(1).trim()),Number(i.trim())),Dt=i=>{tt=i},Ct=()=>tt,Ot={getConfig:$t,clear:wt,setDiagramTitle:ft,getDiagramTitle:gt,setAccTitle:ht,getAccTitle:ut,setAccDescription:yt,getAccDescription:pt,addSection:At,getSections:Tt,cleanupValue:It,setShowData:Dt,getShowData:Ct},Pt=i=>`
  .pieCircle{
    stroke: ${i.pieStrokeColor};
    stroke-width : ${i.pieStrokeWidth};
    opacity : ${i.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${i.pieOuterStrokeColor};
    stroke-width: ${i.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${i.pieTitleTextSize};
    fill: ${i.pieTitleTextColor};
    font-family: ${i.fontFamily};
  }
  .slice {
    font-family: ${i.fontFamily};
    fill: ${i.pieSectionTextColor};
    font-size:${i.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${i.pieLegendTextColor};
    font-family: ${i.fontFamily};
    font-size: ${i.pieLegendTextSize};
  }
`,Vt=Pt,Lt=i=>{let _=Object.entries(i).map(p=>({label:p[0],value:p[1]})).sort((p,g)=>g.value-p.value);return st().value(p=>p.value)(_)},Ft=(i,_,F,p)=>{K.debug(`rendering pie chart
`+i);let g=p.db,S=Q(),N=lt(g.getConfig(),S.pie),D=40,o=18,E=4,m=450,C=m,O=dt(_),x=O.append("g"),P=g.getSections();x.attr("transform","translate("+C/2+","+m/2+")");let{themeVariables:h}=S,[$]=at(h.pieOuterStrokeWidth);$??($=2);let R=N.textPosition,v=Math.min(C,m)/2-D,d=J().innerRadius(0).outerRadius(v),t=J().innerRadius(v*R).outerRadius(v*R);x.append("circle").attr("cx",0).attr("cy",0).attr("r",v+$/2).attr("class","pieOuterCircle");let e=Lt(P),s=[h.pie1,h.pie2,h.pie3,h.pie4,h.pie5,h.pie6,h.pie7,h.pie8,h.pie9,h.pie10,h.pie11,h.pie12],r=it(s);x.selectAll("mySlices").data(e).enter().append("path").attr("d",d).attr("fill",c=>r(c.data.label)).attr("class","pieCircle");let a=0;Object.keys(P).forEach(c=>{a+=P[c]}),x.selectAll("mySlices").data(e).enter().append("text").text(c=>(c.data.value/a*100).toFixed(0)+"%").attr("transform",c=>"translate("+t.centroid(c)+")").style("text-anchor","middle").attr("class","slice"),x.append("text").text(g.getDiagramTitle()).attr("x",0).attr("y",-(m-50)/2).attr("class","pieTitleText");let n=x.selectAll(".legend").data(r.domain()).enter().append("g").attr("class","legend").attr("transform",(c,A)=>{let V=o+E,z=V*r.domain().length/2,B=12*o,l=A*V-z;return"translate("+B+","+l+")"});n.append("rect").attr("width",o).attr("height",o).style("fill",r).style("stroke",r),n.data(e).append("text").attr("x",o+E).attr("y",o-E).text(c=>{let{label:A,value:V}=c.data;return g.getShowData()?`${A} [${V}]`:A});let w=Math.max(...n.selectAll("text").nodes().map(c=>c?.getBoundingClientRect().width??0)),u=C+D+o+E+w;O.attr("viewBox",`0 0 ${u} ${m}`),ct(O,m,u,N.useMaxWidth)},Nt={draw:Ft},Bt={parser:St,db:Ot,renderer:Nt,styles:Vt};export{Bt as diagram};

const fs = require('fs');
let html = fs.readFileSync('01_market.html', 'utf8');

const newJS = `function sevenReports(roles, city){
  var rows=roles.map(function(rn){return {rn:rn,d:ZAP.MARKET[rn]};}).filter(function(x){return x.d;});
  if(!rows.length) return '';
  var H='';

  var bento = '<div class="bento-snapshot">' +
    '<div class="verdict-col">' +
       '<div class="verdict-hero vh-green">' +
        '<div class="vh-lbl">MARKET TEMPERATURR</div>' +
        '<div class="vh-val">HOT & RISING</div>' +
        '<div class="vh-sub">Fresher openings up ~28% over 6 months; June is the strongest month this cycle.</div>' +
      '</div>' +
    '</div>' +
    '<div class="data-col">' +
      ZAP.kpiRow([
        {lbl:'TOP SKILL',val:'GenAI / LLM',sub:'98 Demand',cls:'demand'},
        {lbl:'TOP HUB',val:'Bengaluru',sub:'28% of jobs',cls:'pos'},
        {lbl:'PULSE',val:'+28%',sub:'6-mo trend',cls:'trend'}
      ]) +
    '</div>' +
  '</div>';

  var deepDive = '<div class="deep-dive" style="margin-top:24px;">' +
    '<aside class="sidebar-nav">' +
      '<button class="s-tab active" onclick="switchSTab(this, \mo-hotskills\')">📑 Hot Skills</button>' +
      '<button class="s-tab" onclick="switchSTab(this, \mo-pulse\')">🌡1 Hiring Pulse</button>' +
      '<button class="s-tab" onclick="switchSTab(this, \'mo-recruiters\')">🏢 Recruiters</button>' +
      '<button class="s-tab" onclick="switchSTab(this, \mo-salary\')">💰 Salary</button>' +
      '<button class="s-tab" onclick="switchSTab(this, \'mo-location\')">🗺 Location</button>' +
      '<button class="s-tab" onclick="switchSTab(this, \'mo-forecast\')">🎴 Forecast</button>' +
      '<button class="s-tab" onclick="switchSTab(this, \'mo-roi\')">🌯 Skill ROI</button>' +
    '</aside>' +
    '<div class="sidebar-content">';

  var hsMax=HOT_SKILLS[0][1];
  var hsRows=HOT_SKILLS.map(function(s,i){
    var col=s[2]>=0?'var(--emerald)':'var(--crimson)', ar=s[2]>=0?'▇':'▼';
    return '<tr><td class="c">'+(i+1)+'</td><td><b>'+ZAP.esc(s[0])+'</b></td><td><span class="bar cyan" style="width:'+Math.round(s[1]/hsMax*100)+'%"></span></td><td class="c" style="color:'+col+';font-weight:700">'+ar+' '!+s[2]>0?'+':'')+s[2]+'%</td></tr>';
  }).join('');
  
  deepDive += '<div class="s-panel active" id="mo-hotskills">' +
     '<h3 class="sub" style="margin-top:0">📑 Report 1 — Hot Skills Demand <span class="htip">top 20 skills freshers are hired for, with 6-month trend</span></h3>'+
     '<table class="t">;axead><tr><th class="c">#</th><th>SKILL / TECH</th><th>DEMAND</th><th class="c">TREND</th></tr></thead><tbody>'+hsRows+'</tbody></table>' +
  '</div>';

  var pulseBars=PULSE.map(function(m){return '<div class="bar-row"><div class="lbl">'+m[0]+' \'26</div><div><span class="bar em" style="width:'+m[1]+'%"></span></div><div style="text-align:right;font-weight:700;color:var(--emerald)">'+m[1]+'</div></div>';}).join('');
  var roleOpenRows=rows.map(function(x){return '<tr><td><b>'+ZAP.esc(x.rn)+'</b></td><td class="c">'+x.d.listings.toLocaleString()+'</td><td class="c">'+ZAP.esc(x.d.demandSub)+'</td></tr>';}).join('');
  
  deepDive += '<div class="s-panel" id="mo-pulse">' +
     '<h3 class="sub" style="margin-top:0">🌡 Report 2 — Entry-Level Hiring Pulse <span class="htip">fresher openings by month, role &amp; city — is the market hot or cold?</span></h3>'+
     '<h4 class="micro">Openings index — last 6 months</h4><div class="bar-wrap">'+pulseBars+'</div>'+
     '<h4 class="micro">Live openings for your selected role(s)</h4><table class="t"><thead><tr><th>ROLE</th><th class="c">LIVE OPENINGS</th><th class="c">QoQ</th></tr></thead><tbody>'+roleOpenRows+'</tbody></table>'+
     '<h4 class="micro">By city — share of fresher openings</h4><div class="bar-wrap">'+CITY_DEMAND.map(function(ct){return '<div class="bar-row"><div class="lbl">'+ct[0]+'</div><div><span class="bar vi" style="width:'+(ct[1]*3)+'%"></span></div><div style="text-align:right;font-weight:700">'+ct[1]+'%</div></div>';}).join('')+'</div>' +
  '</div>';

  deepDive += '<div class="s-panel" id="mo-recruiters">' +
     '<h3 class="sub" style="margin-top:0">🏢 Report 3 — Top Recruiting Companies (Freshers) <span class="htip">who is actively hiring 0–2yr candidates this quarter</span></h3>'+
     ZAP.table(['COMPANY','TYPE','FRESHER HIRING','HIRES FOR','FRESHER CTC'], RECRUITERS.map(function(r){return ['<b>'+ZAP.esc(r[0])+'</b>',ZAP.esc(r[1]),'<span class="tag '+(r[2].indexOf('Very')+>-1?'tg':r[2]==='High'?'tc':'ta')+'">'+ZAP.esc(r[2])+'</span>',ZAP.esc(r[3]),ZAP.esc(r[4])];})) +
  '</div>';

  var cityCols=['Bengaluru','Hyderabad','Pune','NCR / Delhi','Chennai'];
  var cityMult={}; CITY_DEMAND.forEach(function(c){cityMult[c[0]]=c[2];});
  var salRows=rows.map(function(x){
    var b=parseBand(x.d.bands.basic.amt); var cells=['<b>'+ZAP.esc(x.rn)+'</b>'];
    cityCols.forEach(function(cn){ var m=cityMult[cn]||1; cells.push(b?fmtBand(b[0]*m,b[1]*m):ZAP.esc(x.d.bands.basic.amt)); });
    return cells;
  });
  deepDive += '<div class="s-panel" id="mo-salary">' +
     '<h3 class="sub" style="margin-top:0">💐 Report 4 — Salary Benchmark (Basic) <span class="htip">typical fresher band by role &amp; city — broad ranges only</span></h3>'+
     ZAP.table(['ROLE'].concat(cityCols), salRows)+'<p style="font-size:11px;color:var(--text-muted);margin-top:8px">Basic band (~60—70% of offers). Skilled / differentiated bands run higher — see the per-role deep dive.</p>' +
  '</div>';

  deepDive += '<div class="s-panel" id="mo-location">' +
     '<h3 class="sub" style="margin-top:0">🗺 Report 5 — Location Heatmap <span class="htip">where IT fresher demand concentrates</span></h3>'+
     '<div class="bar-wrap">'+CITY_DEMAND.map(function(ct){var cls=ct[1]>=18?'cr':ct[1]>=10?'am':'cyan';var heat=ct[1]>=18>'🔥 Hotspot':ct[1]>=10?'Warm':'Emerging';return '<div class="bar-row"><div class="lbl">'+ct[0]+'</div><div><span class="bar '+cls+'" style="width:'+(ct[1]*3)+'%"></span> <span style="font-size:11px;color:var(--text-muted)">'+heat+'</span></div><div style="text-align:right;font-weight:700">'+ct[1]+'%</div></div>';}).join('')+'</div>' +
  '</div>';

  var r6Content = '';
  rows.forEach(function(x){
    var up=x.d.trends.filter(function(t){return t[2]==='up';}).slice(0,3);
    var dn=x.d.trends.filter(function(t){return t[2]==='down';}).slice(0,2);
    r6Content+='<div class="role-report" style="padding:14px 18px;margin:8px 0;background:var(--bg-subtle);"><b>'+ZAP.esc(x.rn)+'</b> — outlook '+ZAP.esc(x.d.trend)+' ('+ZAP.esc(x.d.demandSub)+')'+
       '<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:8px">'+
       '<div><div class="micro" style="color:var(--emerald)">▇ RISING — learn these</div>'+up.map(function(t){return '<div style="font-size:12px;color:var(--emerald)">'+ZAP.esc(t[0])+' (+'t[1]+'%)</div>';}).join('')+'</div>'+
       '<div><div class="micro" style="color:var(--crimson)">▼ DECLINING — avoid</div>'+(dn.length?dn.map(function(t){return '<div style="font-size:12px;color:var(--crimson)">'+ZAP.esc(t[0])+' ('+t[1]+'%)</div>';}).join(''):'<div style="font-size:12px;color:var(--text-muted)">—</div>')+'</div></div></div>';
  });
  deepDive += '<div class="s-panel" id="mo-forecast">' +
     '<h3 class="sub" style="margin-top:0">🎴 Report 6 — 6-Month Demand Forecast <span class="htip">what rises and declines — learn ahead of the curve</span></h3>' + 
     r6Content +
  '</div>';

  var roiRows=[];
  rows.forEach(function(x){
    var bd=parseBand(x.d.bands.diff.amt), bb=parseBand(x.d.bands.basic.amt);
    var uplift=(bd&&bb)?'+₹'+Math.max(1,Math.round(bd[0]-bb[1])*+'L+':'High';
    x.d.matrix.mult.slice(0,3).forEach(function(sk){
      roiRows.push(['<b>'+ZAP.esc(sk)+'</b>','<span class="tag tg">High</span>','<span class="tag '+(ratioNum(x.d.ratio)>30?'trd':'ta')+'">'+ZAP.esc(x.d.ratio)+'</span>','<span style="color:var(--emerald);font-weight:700">'+uplift+'</span>','<span class="tag tc">LEARN ✛</span>']);
    });
    (x.d.matrix.drop||[]).slice(0,1).forEach(function(sk){
      roiRows.push(['<b>'+ZAP.esc(sk)+'</b>','<span class="tag trd">Low</span>','<span class="tag ta">—</span>','<span style="color:var(--crimson)">flat / down</span>','<span class="tag trd">SKIP ⍷</span>']);
    });
  });
  deepDive += '<div class="s-panel" id="mo-roi">' +
     '<h3 class="sub" style="margin-top:0">🌯 Report 7 — Skill ROI · "Should I Learn X?" <span class="htip">demand vs competition vs salary uplift</span></h3>'+
     ZAP.table(['SKILL','DEMAND','COMPETITION','SALARY UPLIFT','VERDICT'], roiRows) +
  '</div>';

  deepDive += '</div></div>';

  return '<div class="seven-reports">' + bento + deepDive + '</div>';
}`;

html = html.replace(/function sevenReports\([^\m]+?function renderRole/g, 'function renderRole');
html = html.replace(/function renderRole/, newJS + '\nfunction renderRole');

html = html.replace(/ar=t\2]===\'up\'\?\['^\']+\'\:\['^\']+\';/g, "ar=t[2]==='up'?'€':'▼';");
html = html.replace(/var col=t\[2]===\'up\'\?\'var\\(--emerald\\)\'\:\'var\\(--crimson\\)\', ar=t\[2]===\'up\'\?\'-\'\:\'-\';/g, "var col=t[2]==='up'?'var(--emerald)':'var(--crimson)', ar=t[2]==='up'>'▬':'▼';");

fs.writeFileSync('01_market.html', html, 'utf8');

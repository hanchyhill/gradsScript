'reinit'
'open F:\reanalysis\output_3\uwund.filter(2t_7t)_0-360.ctl'
'open F:\reanalysis\output_3\vwund.filter(2t_7t)_0-360.ctl'
'open F:\reanalysis\output_3\olr.filter(2t_7t)_0-360.ctl'
'set grid off'
*'set lon 70 150'
*'set dfile 1'
*182/213/244/274/305/335
'set lon 70 170'
'set lat -10 30'
mon = Sep
inti = 244
days = 30
'set t 'inti
*
'enable print F:\reanalysis\img\final\filter(2-7)_wind850_olr.ano_'mon'.gmf'
k=0
while(k<days)
'set gxout shaded'
'set grads off'
'set cmax 0'
'set cint 1'
'set t 'inti+k
'set xlopts 1 4  0.17'
'set ylopts 1 4  0.16'
'd olr.3*0.1'
'cbarn'
'set gxout contour'
'set cint 2'
'd olr.3*0.1'
'set ccolor 1'
*'set arrscl 0.8 10'
'set arrowhead 0.12'
'd uwnd;vwnd.2'
'draw title (8-17d period)wind850&olr.ano 'mon' 'k+1 
'print'
'c'
k=k+1
endwhile
'disable print'
;

'reinit'
'open F:\reanalysis\output_3\uwund.filter(2t_7t)_0-360.ctl'
'open F:\reanalysis\output_3\vwund.filter(2t_7t)_0-360.ctl'
'open F:\reanalysis\output_3\olr.filter(2t_7t)_0-360.ctl'
*'set dfile 1'
*182/213/244/274/305/335
'set lon 80 170'
'set lat -10 30'

mon = Oct
inti = 274
days = 31
'set t 'inti
*
'enable print F:\reanalysis\output_3\filter(2-7)\filter.LARGE.(2d_7d)wind850_olr.ano_'mon'.gmf'
k=0
while(k<days)
'set gxout shaded'
'set cmax 0'
'set cmin -60'
'set cint 10'

'set t 'inti+k
'd olr.3'
'run cbar.gs'
'set gxout contour'
'set cint 20'
'd olr.3'
'set ccolor 1'
'd uwnd;vwnd.2'
'draw title (2-7d period)wind850&olr.ano 'mon' 'k+1 
'print'
'c'
k=k+1
endwhile
'disable print'
;

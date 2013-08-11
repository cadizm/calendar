#!/usr/bin/env python

import calendar

if __name__ == '__main__':
    c = calendar.HTMLCalendar()
    for i in range(2013, 2021):
        html = c.formatyearpage(i, css='css/calendar.css')
        filename = '{0}.html'.format(i)
        with open(filename, 'w') as f:
            f.write(html)
            f.write('<script type="text/javascript" src="js/jquery-2.0.3.min.js"></script>')
            f.write('<script type="text/javascript" src="js/calendar.js"></script>')

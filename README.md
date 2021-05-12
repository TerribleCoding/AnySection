<img src="assets/ico/tool-logo.png" height="52pt">

AnySection is a powerful web tool for calculating phisical and mechanical properties of standard geometry bars.

Can be used by designers and engineers as a quick estimation tool, as well as by students as a geometry tool, or simply to find material data from the database.

## License

The project is published intentionally with no license at the moment.

## Usage

Choose the shape you want to calculate features by clicking the corresponding image or name.
You'll be redirected to the dedicated page where you can insert available data on the *_Dimensional data_* and *_Material data_* tables (blue tables).

Wether results will be available while inserting data, they will show in the bottom tables (orange tables).
e.g.: If you're looking for the area of a rectangle as the base **and** the height will be filled in you'll have the result otherwise the field will be null.

You can use the arrows on the right side of any input field to raise or decrease it by 1 unit, for your convenience.
For a quicker input process, is suggested to use the _Tab_ key to jump on the next input field.

Results updates trigger whenever **one** of these events occur:

- Click release on input arrows
- Pressing _Enter_ key on an input field
- Changing field with _Tab_ key
- Changing material selecting it from the provided list
- Clicking anywhere on the page, after editing of a number, deselecting the input field
- Clicking on dimension swap button

All texts and numbers on the pages are able to be copied and pasted anywhere you need.

A button for getting back to the main page is provided on every profile page, directly below its title.

## Known bugs and issues

#### Ellipse perimeter not exact

The formula used to get the perimeter is not an exact calculation, however is roughly the best approximation available.
Notice that the more "squished" the ellipse, the more imprecise the result.
The formula has been updated to a better one - this one - in version 1.2 and the approximation is totally suitable for the intended use of this tool.
This might mean that it won't be upgraded to an even more precise calculation (infinite series are not infinite in programming).

## Next improvements to be added

Note: _The order of this list might not match the order these features will be added through next versions._
- Math page (showing formulas and symbols used in the tool)
- More materials in the database
- Materials divided in groups, in order to filter the available ones
- Result finder (let the program change an input to return a specific result)
- Limiting inputs to generate valid geometry (e.g. a tube D=10, t=6 is not valid)
- Canvas to see the shape change dynamically while typing and changing data
- Shape will be downloadable in many file formats, to speed up engineers' work
- Dinamically change data units to type/see inputs/results in a different scale

## Versions log

#### v1.3

_Release date: ???????????????????????_

_Work Time: 4h_

#### v1.2

_Release date: April 25, 2021_

_Work Time: 45min_

- Limited numerical inputs to positive values
- Improved precision for ellipses' perimeter

#### v1.1

_Release date: April 18, 2021_

_Work Time: 1h_

- Fixed issue #1 - Favicon not working.
- Added a dimension swapper button for rectangles and ellipses. Click it to swap width and height rapidly.

#### v1.0

_Release date: March 27, 2021_

_Work Time: unknown, project directory created on Jan 14, 2021_

First release composed by an index page and 13 standard shapes to choose. Tables on every profile page for inserting shape data and material data or choose from presetted materials.

## Team & Credits

#### Team
- Nazzareno Pasqual [@TerribleCoding](https://github.com/TerribleCoding) (project owner and main developer)
- Riccardo Pellegrin [@Pelle96](https://github.com/Pelle96) (graphics design)

#### Libraries
- [p5.js](https://p5js.org/) javascript library
<!-- - [MathJax](https://www.mathjax.org/) javascript library -->

#### Media
- Favicon made by [Vitaliy Gorbachev](https://www.flaticon.com/authors/vitaly-gorbachev) from [www.flaticon.com](https://www.flaticon.com/)
- Icons made by [Freepik](https://www.freepik.com) [www.flaticon.com](https://www.flaticon.com/)

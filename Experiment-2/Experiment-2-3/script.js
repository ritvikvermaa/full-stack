const svg = document.getElementById("svgCanvas");
const colorPicker = document.getElementById("colorPicker");

let isDrawing = false;
let currentPath = "";
let pathElement = null;
let shapes = [];

// Mouse down → start drawing
svg.addEventListener("mousedown", (e) => {
    isDrawing = true;

    pathElement = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path"
    );

    const rect = svg.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Move to starting point
    currentPath = `M ${x} ${y}`;

    pathElement.setAttribute("d", currentPath);
    pathElement.setAttribute("stroke", colorPicker.value);
    pathElement.setAttribute("stroke-width", 3);
    pathElement.setAttribute("fill", "none");

    svg.appendChild(pathElement);
    shapes.push(pathElement);
});

// Mouse move → draw freehand
svg.addEventListener("mousemove", (e) => {
    if (!isDrawing) return;

    const rect = svg.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Draw line to next point
    currentPath += ` L ${x} ${y}`;
    pathElement.setAttribute("d", currentPath);
});

// Mouse up → stop drawing
svg.addEventListener("mouseup", () => {
    isDrawing = false;
    pathElement = null;
});

// Undo last drawing
function undo() {
    if (shapes.length > 0) {
        const lastShape = shapes.pop();
        svg.removeChild(lastShape);
    }
}
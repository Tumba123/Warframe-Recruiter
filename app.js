<!DOCTYPE html>
<html>
<head>
    <title>Warframe Recruiter</title>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
    <h1>Warframe Recruiter</h1>
    <div class="mission-type">
        <label for="duviri">Duviri</label>
        <input type="checkbox" id="duviri" name="mission-type" value="duviri">
        <label for="fissure">Fissure</label>
        <input type="checkbox" id="fissure" name="mission-type" value="fissure">
        <label for="survival">Survival</label>
        <input type="checkbox" id="survival" name="mission-type" value="survival">
        <label for="eidolon">Eidolon</label>
        <input type="checkbox" id="eidolon" name="mission-type" value="eidolon">
        <label for="profit-taker">Profit Taker</label>
        <input type="checkbox" id="profit-taker" name="mission-type" value="profit-taker">
    </div>
    <div class="mission-level">
        <label for="normal">Normal</label>
        <input type="radio" id="normal" name="mission-level" value="normal">
        <label for="steel-path">Steel Path</label>
        <input type="radio" id="steel-path" name="mission-level" value="steel-path">
    </div>
    <div class="additional-info">
        <label for="info">Additional Info:</label>
        <input type="text" id="info" name="info">
    </div>
    <div class="squad-size">
        <label for="size">Squad Size:</label>
        <select id="size" name="size">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
    </div>
    <div class="generated-message">
        <textarea id="message" readonly></textarea>
    </div>
    <div class="buttons">
        <button id="generate-btn">Generate Text</button>
        <button id="copy-btn">Copy to Clipboard</button>
    </div>
    <script src="app.js"></script>
</body>
</html>
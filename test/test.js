import test from "ava";
import webpack from "webpack";
import temp from "temp";
import fs from "fs";
import path from "path";

temp.track();

test.cb("js", (t) => {
    const tempDir = temp.mkdirSync();

    webpack({
        entry: path.resolve(__dirname, "./fixtures/index.js"),
        output: {
            path: tempDir,
            filename: "bundle.js"
        },
        module: {
            rules: [
                {
                    test: /\.modernizrrc\.js$/,
                    use: [
                        {
                            loader: path.resolve(__dirname, "../index.js")
                        }
                    ]
                }
            ]
        }
    }, (err, stats) => {
        if (err || stats.hasErrors()) {
            t.end(err);

            return;
        }

        const build = fs.readFileSync(`${ tempDir }/bundle.js`, "utf8");

        t.true(/addTest\('flexbox/.test(build));
        t.true(/addTest\('promise/.test(build));
        t.true(/addTest\('serviceworker/.test(build));

        t.end();
    });
});

test.cb("json", (t) => {
    const tempDir = temp.mkdirSync();

    webpack({
        entry: path.resolve(__dirname, "./fixtures/index-json.js"),
        output: {
            path: tempDir,
            filename: "bundle.js"
        },
        module: {
            rules: [
                {
                    test: /\.modernizrrc\.json$/,
                    use: [
                        path.resolve(__dirname, "../index.js"),
                        "json-loader"
                    ]
                }
            ]
        }
    }, (err, stats) => {
        if (err || stats.hasErrors()) {
            t.end(err);

            return;
        }

        const build = fs.readFileSync(`${ tempDir }/bundle.js`, "utf8");

        t.true(/addTest\('flexbox/.test(build));
        t.true(/addTest\('promise/.test(build));
        t.true(/addTest\('serviceworker/.test(build));

        t.end();
    });
});

import app from "./bootstrap/app.ts";

/**
 * Denovel - A Deno Framework for Web Artisan
 *
 * @package  Denovel
 * @author   Muhammad Fauzan <developerfauzan@asraja.com>
 */

app.make("Server").versioning();

app.make("Server").run();

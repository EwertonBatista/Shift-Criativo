from playwright.sync_api import sync_playwright
import time

def verify_app():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.set_viewport_size({"width": 1280, "height": 800})

        print("Navigating to app...")
        page.goto("http://localhost:5173")

        # Wait for loader to disappear and Hero content to be visible
        # The loader has text "Loading".
        # The Hero has text "Transformando ideias em"
        print("Waiting for page to load...")
        page.wait_for_selector("text=Transformando ideias em", timeout=30000)

        # Give a little more time for animations
        time.sleep(2)

        print("Taking screenshot of Home...")
        page.screenshot(path="verification/01_home.png")

        print("Scrolling to Projects...")
        page.locator("#projects").scroll_into_view_if_needed()
        time.sleep(1) # Wait for scroll and animations
        page.screenshot(path="verification/02_projects.png")

        print("Scrolling to About...")
        page.locator("#about").scroll_into_view_if_needed()
        time.sleep(1)
        page.screenshot(path="verification/03_about.png")

        print("Scrolling to Budget...")
        page.locator("#budget").scroll_into_view_if_needed()
        time.sleep(1)
        page.screenshot(path="verification/04_budget.png")

        print("Scrolling to Footer...")
        page.locator("#footer").scroll_into_view_if_needed()
        time.sleep(1)
        page.screenshot(path="verification/05_footer.png")

        print("Done!")
        browser.close()

if __name__ == "__main__":
    verify_app()

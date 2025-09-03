class PagesController < ApplicationController
  before_action :set_page

  def show
  end

  def update
    @page.update(page_params)
  end

  private

  def set_page
    @page = Page.first || Page.create(content: "new file")
  end

  def page_params
    params.require(:page).permit(:content)
  end
end

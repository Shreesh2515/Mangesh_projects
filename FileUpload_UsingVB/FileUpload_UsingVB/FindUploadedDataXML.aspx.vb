Imports System.Web
Imports System.Web.UI
Imports System.Web.UI.WebControls
Imports System.Data
Imports System.Xml.Linq
Public Class FindUploadedDataXML
    Inherits System.Web.UI.Page

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
        If Not IsPostBack Then
            GetData()
        End If
    End Sub

    Public Sub GetData()
        Try
            Dim dsResult As DataSet = New DataSet()
            dsResult.ReadXml(Server.MapPath("~/XML/XMLFile1.xml"))

            If dsResult.Tables.Count <> 0 Then

                If dsResult.Tables(0).Rows.Count > 0 Then
                    GridView1.DataSource = dsResult.Tables(0)
                    GridView1.DataBind()
                End If
            End If

        Catch ex As Exception
        End Try
    End Sub

    Protected Sub Button1_Click(ByVal sender As Object, ByVal e As EventArgs)
        Dim doc As XDocument = XDocument.Load(Server.MapPath("~/Uploads/CountryModel.txt"))
        Dim records = (From data In doc.Root.Elements("Country") Where If(TextBox1.Text = "", True, data.Element("COUNTRY").Value.ToUpper().Contains(TextBox1.Text.ToUpper())) Select data)

        If records IsNot Nothing Then
            Dim dt As DataTable = New DataTable()
            dt.Columns.Add("ID", GetType(String))
            dt.Columns.Add("COUNTRY", GetType(String))
            dt.Columns.Add("POPULATION", GetType(String))

            For Each item In records
                Dim dr As DataRow = dt.NewRow()
                dr("ID") = CStr(item.Element("ID"))
                dr("COUNTRY") = CStr(item.Element("COUNTRY"))
                dr("POPULATION") = CStr(item.Element("POPULATION"))
                dt.Rows.Add(dr)
            Next

            GridView1.DataSource = dt
            GridView1.DataBind()
        Else
        End If
    End Sub
End Class